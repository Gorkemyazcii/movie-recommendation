import { Category } from "@/types";
import Link from "next/link";
import React from "react";
import HorizontalScroll from "../horizontalScroll";

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    <HorizontalScroll>
      <div className="flex w-full px-4 lg:h-16 lg:gap-12 h-12 gap-3 lg:text-base text-sm lg:duration-500 max-lg:duration-500 ">
        {categories.slice(0, 20).map((category: Category, index: number) => {
          return (
            <Link
              key={index}
              href={`${category.id}`}
              passHref
              className="flex items-center justify-center bg-black bg-opacity-50 px-8 py-2 rounded-xl "
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </HorizontalScroll>
  );
}
