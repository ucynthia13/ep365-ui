import {
  Smartphone,
  Apple,
  Layers,
  View,
  BrainCircuit,
  LayoutDashboard,
  Wrench,
} from "lucide-react";

export const industries = [
  {
    title: "Android App Development",
    description:
      "Crafting robust, high-performance apps optimized for Android’s diverse ecosystem.",
    icon: <Smartphone className="w-6 h-6 text-green-500" />,
  },
  {
    title: "iOS App Development",
    description:
      "High-quality Swift & Objective-C apps fully integrated with iOS devices.",
    icon: <Apple className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Build apps with Flutter & React Native using a single codebase for both platforms.",
    icon: <Layers className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "AR/VR App Development",
    description:
      "Immersive AR/VR apps that enhance user experience across gaming and education.",
    icon: <View className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "AI App Development",
    description:
      "Leverage AI, NLP, and analytics for smart, adaptive, and personalized app experiences.",
    icon: <BrainCircuit className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Engaging, user-centered interfaces crafted through research and iterative design.",
    icon: <LayoutDashboard className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "App Testing & Maintenance",
    description:
      "Ongoing support, bug fixes, optimizations, and performance testing to keep apps secure.",
    icon: <Wrench className="w-6 h-6 text-teal-500" />,
  },
];