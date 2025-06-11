export type PRFlowStep = {
  label: string;
  title: string;
  imageSrc: string;
  description: string;
};

export const prFlowSteps: PRFlowStep[] = [
  {
    label: "Create",
    title: "Create",
    imageSrc: "/images/featuresPage/desktop_create_2db800ed34.webp.svg",
    description:
      "Create purchase requisitions in minutes with EP365. Use saved PR templates, convert warehouse requests, or build custom ones on the spot. Choose items from the pre-approved catalog, import externally, or add instantly — all while tracking live budget availability.",
  },
  {
    label: "Submit",
    title: "Submit",
    imageSrc: "/images/featuresPage/desktop_create_2db800ed34.webp (1).svg",
    description:
      "Submit PRs with automated routing based on predefined workflows. Ensure the right stakeholders receive requests instantly for fast approvals.",
  },
  {
    label: "Discuss",
    title: "Discuss",
    imageSrc: "/images/featuresPage/desktop_create_2db800ed34.webp (2).svg",
    description:
      "Collaborate on PRs with threaded comments, tag teammates, and resolve questions before moving forward — all in one platform.",
  },
  {
    label: "Edit",
    title: "Edit",
    imageSrc: "/images/featuresPage/desktop_create_2db800ed34.webp (3).svg",
    description:
      "Easily make changes to PRs before approval. Maintain a clear audit trail of who changed what and when.",
  },
  {
    label: "Track",
    title: "Track",
    imageSrc: "/images/featuresPage/desktop_create_2db800ed34.webp (4).svg",
    description:
      "Monitor the status of all PRs with real-time updates. Know exactly where each request is in the process.",
  },
  {
    label: "Approve",
    title: "Approve",
    imageSrc: "/images/featuresPage/desktop_create_2db800ed34.webp (5).svg",
    description:
      "Quickly approve or reject PRs with clear visibility into the request’s details, history, and budget alignment.",
  },
];
