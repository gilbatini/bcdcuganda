"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

const field =
  "mt-2 block w-full rounded-2xl border-2 border-ink/15 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-uniform focus:outline-none aria-[invalid=true]:border-ember";

export function ContactForm({ defaultTopic = "General question" }: { defaultTopic?: string }) {
  const [state, action, pending] = useActionState(sendMessage, initial);

  if (state.status === "sent") {
    return (
      <div role="status" className="rounded-[2rem] bg-sky p-8">
        <h2 className="text-2xl font-bold">Message sent</h2>
        <p className="mt-3 text-lg text-ink-soft">
          Thank you for writing to BCDC. We reply within a few days, usually sooner on weekdays.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? (state.fields ?? {}) : {};

  return (
    <form action={action} noValidate className="flex flex-col gap-6">
      {state.status === "error" ? (
        <p role="alert" className="rounded-2xl bg-ember/10 px-4 py-3 font-medium text-ember">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="font-medium">
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={field}
          />
          {errors.name ? (
            <span id="name-error" className="mt-1 block text-sm text-ember">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={field}
          />
          {errors.email ? (
            <span id="email-error" className="mt-1 block text-sm text-ember">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="font-medium">
          Phone <span className="font-normal text-ink-soft">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="font-medium">
          What it&rsquo;s about
          <select name="topic" defaultValue={defaultTopic} className={field}>
            <option>General question</option>
            <option>Supporting BCDC</option>
            <option>Enrolling a child</option>
            <option>Visiting the centre</option>
            <option>Volunteering</option>
          </select>
        </label>
      </div>

      <label className="font-medium">
        Message
        <textarea
          name="message"
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={field}
        />
        {errors.message ? (
          <span id="message-error" className="mt-1 block text-sm text-ember">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <button type="submit" disabled={pending} className="btn btn-star disabled:opacity-60">
          {pending ? "Sending message…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
