import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export function Card({ title, children }: Props) {
  return (
    <div className="py-8 flex flex-wrap md:flex-col">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 block">
        <span className="font-semibold title-font text-gray-700">{title}</span>
      </div>
      <div className="md:flex-grow flex space-x-8 bg-slate-50 w-full mt-3 dark:bg-slate-600/20 rounded-lg">
        <div className="flex flex-wrap">{children}</div>
      </div>
    </div>
  );
}
