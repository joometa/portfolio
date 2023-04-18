import React from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  img?: string;
}
export function Item({ children, img }: Props) {
  return (
    <div className="text-xl font-medium text-gray-900 title-font m-4  p-3 rounded-md flex-col flex justify-center items-center">
      {img && (
        <div className="w-24 h-24 relative ">
          <Image
            className="rounded-xl"
            src={img}
            alt="cover image"
            loading="lazy"
            fill
          />
        </div>
      )}
      <div className="flex justify-center mt-4 dark:text-white">{children}</div>
    </div>
  );
}
