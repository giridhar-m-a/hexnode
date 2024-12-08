import { StaticImageData } from "next/image";
import Mordak from "@/assets/justin-modrak.webp";
import Kruljac from "@/assets/dalibor-kruljac.webp";
import Robinson from "@/assets/chris-robinson.webp";

export type review = {
  review: string;
  name: string;
  designation: string;
  company: string;
  image: StaticImageData;
};

export const Reviews: review[] = [
  {
    review: `"Hexnode is of great value. Works great with Android and iOS!"`,
    name: "Justin Modrak",
    designation: "Technology Coordinator",
    company: "East Troy Community School District",
    image: Mordak,
  },
  {
    review: `"Most complete MDM solution I found, and I tested many of them, including major names"`,
    name: "Dalibor Kruljac",
    designation: "",
    company: "KAMELEYA LTD",
    image: Kruljac,
  },
  {
    review: `"It seemed to be in-line with everything we were looking at."`,
    name: "Chris Robinson",
    designation: "Executive Account Manager, NCS",
    company: "",
    image: Robinson,
  },
];
