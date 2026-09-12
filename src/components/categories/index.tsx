import { Category } from "@/types";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    // Sabit 5'li gruplama yerine her kategori kendi slaytında: genişlik ne olursa
    // olsun ekrana kaç tane sığıyorsa o kadarı görünür.
    <Carousel
      opts={{ align: "start", dragFree: true, slidesToScroll: "auto" }}
      className="mx-0 sm:mx-14 lg:mx-20"
    >
      <CarouselContent className="-ml-2 sm:-ml-4">
        {categories.map((category) => (
          <CarouselItem key={category.id} className="basis-auto pl-2 sm:pl-4">
            <Link
              href={`/${category.id}`}
              passHref
              className="block whitespace-nowrap bg-black px-4 py-3 rounded-lg bg-opacity-65 text-sm hover:bg-white hover:text-black duration-500 sm:px-5 sm:py-4 sm:text-base"
            >
              {category.name}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  );
}
