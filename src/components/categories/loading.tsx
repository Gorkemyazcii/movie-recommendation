import React from "react";
import Skeleton from "@/components/skeleton";

export default function CategoriesLoading() {
  return (
    <div className="flex h-16 gap-6 w-full justify-between px-4">
      <Skeleton width={250} height={72} />
      <Skeleton width={250} height={72} />
      <Skeleton width={250} height={72} />
      <Skeleton width={250} height={72} />
      <Skeleton width={250} height={72} />
    </div>
  );
}
