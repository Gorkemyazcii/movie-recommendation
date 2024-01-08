import React from "react";
import Loading from "@/components/loading";

export default function FeaturedMovieLoading() {
  return (
    <div className="flex flex-col gap-6 mt-14 mb-14 h-72">
      <Loading />
    </div>
  );
}
