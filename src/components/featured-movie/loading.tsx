import React from "react";
import Loading from "@/components/loading";

export default function FeaturedMovieLoading() {
  return (
    <div className="flex flex-col gap-6 mt-8 mb-8 h-52 sm:mt-14 sm:mb-14 sm:h-72">
      <Loading />
    </div>
  );
}
