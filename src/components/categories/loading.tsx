import React from "react";
import Skeleton from "@/components/skeleton";

export default function CategoriesLoading() {
  return (
    <div className="flex gap-2 overflow-hidden sm:gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-12 w-24 shrink-0 rounded-lg sm:h-14 sm:w-32 lg:w-40"
        />
      ))}
    </div>
  );
}
