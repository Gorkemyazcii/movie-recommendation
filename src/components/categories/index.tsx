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
  const carouselItems = [];
  for (let i = 0; i < categories.length; i += 5) {
    carouselItems.push(categories.slice(i, i + 5));
  }

  return (
    <Carousel className="mx-20">
      <CarouselContent>
        {carouselItems.map((carouselItem, index) => (
          <CarouselItem key={index} className="flex justify-center gap-5">
            {carouselItem.map((category) => (
              <Link href={`/${category.id}`} passHref key={category.id} className="bg-black p-5 rounded-lg bg-opacity-65 hover:bg-white hover:text-black duration-500">
                {category.name}
              </Link>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

