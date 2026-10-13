import type { StaticImageData } from "next/image";
import hidaya from "@/images/staff-hidaya.png";
import sandra from "@/images/staff-sandra.png";
import alice from "@/images/staff-alice.png";
import esther from "@/images/staff-esther.png";

export type StaffMember = {
  name: string;
  role: string;
  photo?: StaticImageData;
};

export const staff: StaffMember[] = [
  { name: "Alice Kisitu", role: "Program Manager", photo: alice },
  { name: "Hidaya Nakazibwe", role: "Head Teacher", photo: hidaya },
  { name: "Sandra Mayanja", role: "Assistant Teacher", photo: sandra },
  { name: "Esther Nayebale", role: "Teacher Aide", photo: esther },
  { name: "Brian Musisi", role: "Substitute Teacher" },
];
