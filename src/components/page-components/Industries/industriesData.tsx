import {
  Microscope,
  Stethoscope,
  Cpu,
  Hammer,
  HelpingHand,
  BookOpenCheck,
} from "lucide-react";

export const industries = [
  {
    title: "Biotechnology",
    description:
      "Ensure compliant procurement of research materials, lab equipment, and clinical supplies.",
    icon: <Microscope className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Healthcare",
    description:
      "Streamline ordering of medical supplies, pharmaceuticals, and hospital equipment.",
    icon: <Stethoscope className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Technology",
    description:
      "Manage hardware, software, and IT services purchasing with ease and transparency.",
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Construction",
    description:
      "Track procurement of building materials, tools, and safety gear across job sites.",
    icon: <Hammer className="w-6 h-6 text-amber-700" />,
  },
  {
    title: "Non-profit",
    description:
      "Maintain budget-friendly purchasing while ensuring accountability for donor-funded items.",
    icon: <HelpingHand className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Education",
    description:
      "Centralize procurement for classroom supplies, lab gear, and administrative needs.",
    icon: <BookOpenCheck className="w-6 h-6 text-indigo-500" />,
  }
];