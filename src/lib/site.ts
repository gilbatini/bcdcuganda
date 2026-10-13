export const site = {
  name: "Bufulu Community Development Center",
  shortName: "BCDC",
  url: "https://bcdcuganda.org",
  email: "info@bcdcuganda.org",
  description:
    "Bufulu Community Development Center (BCDC) is a non-profit in Nkumba Bufulu village, Wakiso District, Uganda, giving children from low-income families an early start in education and supporting their parents.",
  addresses: {
    uganda: ["P.O. Box 5637", "Kampala, Uganda"],
    usa: ["15524 Peach Orchard Road", "Silver Spring, MD 20905", "United States"],
  },
  location:
    "The centre sits on Fulu Road, off Kasenyi Road, in Bufulu village, Nkumba Parish, Wakiso District. It is about 18 minutes from Entebbe International Airport.",
  programsVideo: "https://www.youtube-nocookie.com/embed/8D1blD6JLt8",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/staff", label: "Our staff" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
] as const;

export const mission =
  "Serve, educate, assist, promote and shape the community.";

export const programs = [
  {
    slug: "head-start",
    title: "Head Start for ages 3 to 5",
    when: "Monday to Friday, 8:00 am to 12:00 pm",
    body: "A morning pre-school that gets children from low-income families ready for primary school. It is led by two teachers and a helper. Families pay a very low fee, which keeps them invested in their child's learning.",
  },
  {
    slug: "community-lessons",
    title: "Lessons for adolescents, women and men",
    when: "Weekly",
    body: "Members sign up for weekly lessons on reaching family goals and strengthening their households. The program includes a wellness clinic covering physical, social and emotional health.",
  },
  {
    slug: "family-well-being",
    title: "Family well-being",
    when: "While children are in class",
    body: "With their children at the centre each morning, stay-at-home mothers have time to look for part-time work. A small membership fee applies.",
  },
] as const;
