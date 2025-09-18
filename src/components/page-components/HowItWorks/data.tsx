import { Monitor, Plug, Rocket } from "lucide-react";

      export const items=[
        {
          title: "Design your Workflow",
          description: "A drag-and-drop interface to create, connect, and configure agents into logical workflows",
          icon: <Monitor className="w-5 h-5 text-primary" />,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1361&auto=format&fit=crop",
        },
        {
          title: "Connect your Tools",
          description: "Agents operate independently and coordinate tasks to complete complex goals together",
          icon: <Plug className="w-5 h-5 text-primary" />,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1361&auto=format&fit=crop",
        },
        {
          title: "Deploy & Scale",
          description: "Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions",
          icon: <Rocket className="w-5 h-5 text-primary" />,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1361&auto=format&fit=crop",
        },
      ]