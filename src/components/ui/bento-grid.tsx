import { cn } from "@/lib/utils";
import { Card } from "./card";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
      <Card
        className={cn(
          "relative h-100 overflow-hidden group/bento shadow-input row-span-1 flex flex-col rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 dark:border-white/[0.2] dark:bg-black dark:shadow-none items-center",
          className
        )}
      >
        {header}
        <div>
          {icon}
          <div className="mt-2 mb-2 font-medium">
            {title}
          </div>
          <div>
            {description}
          </div>
        </div>
      </Card>
  );
};
