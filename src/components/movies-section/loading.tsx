import React from "react";

import Skeleton from "@/components/skeleton";

export default function MovieSectionLoading() {
  return (
    <div className="mt-10">
      <Skeleton width={128} height={36} />
      <div className="flex gap-10 justify-between">
        <Skeleton width={500} height={250} />
        <Skeleton width={500} height={250} />
        <Skeleton width={500} height={250} />
        <Skeleton width={500} height={250} />
        <Skeleton width={500} height={250} />
        <Skeleton width={500} height={250} />
        <Skeleton width={500} height={250} />
      </div>
    </div>
  );
}
