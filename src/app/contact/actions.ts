"use server";

import { site } from "@/lib/site";

export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "error"; message: string; fields?: Partial<Record<FieldName, string>> };

type FieldName = "name" | "email" | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Hidden field that people never fill in; bots usually do.
  if (clean(formData.get("company"), 200)) {
    return { status: "sent" };
  }

  const name = clean(formData.get("name"), 120);
  const email = clean(formData.get("email"), 200);
  const phone = clean(formData.get("phone"), 40);
  const topic = clean(formData.get("topic"), 60) || "General question";
  const message = clean(formData.get("message"), 5000);

  const fields: Partial<Record<FieldName, string>> = {};
  if (!name) fields.name = "Enter your name.";
  if (!EMAIL_RE.test(email)) fields.email = "Enter an email address we can reply to.";
  if (message.length < 10) fields.message = "Write a message of at least a few words.";
  if (Object.keys(fields).length > 0) {
    return { status: "error", message: "Check the highlighted fields and send again.", fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "BCDC website <website@bcdcuganda.org>";

  if (!apiKey) {
    return {
      status: "error",
      message: `The form isn't connected yet. Email us directly at ${site.email}.`,
    };
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Topic: ${topic}`,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `BCDC website: ${topic} from ${name}`,
      text,
      html: `<pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    }),
  });

  if (!res.ok) {
    return {
      status: "error",
      message: `Your message couldn't be sent. Email us directly at ${site.email}.`,
    };
  }

  return { status: "sent" };
}
