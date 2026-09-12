import React from "react";

import Skeleton from "@/components/skeleton";

export default function MovieSectionLoading() {
  return (
    <div className="mt-8 sm:mt-10">
      <Skeleton className="h-7 w-32 rounded sm:h-9 sm:w-40" />
      {/* Yüklenen hâl, gerçek carousel ile aynı oran ve sayıda poster gösterir */}
      <div className="mt-3 flex gap-2 overflow-hidden sm:gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={index}
            className="aspect-[2/3] w-1/3 shrink-0 rounded-lg sm:w-1/4 md:w-1/5 lg:w-1/6"
          />
        ))}
      </div>
    </div>
  );
}
