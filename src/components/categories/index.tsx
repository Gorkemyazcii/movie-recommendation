import { Category } from "@/types";
import Link from "next/link";
import React from "react";
import HorizontalScroll from "../horizontalScroll";
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

// import { Category } from "@/types";
// import Link from "next/link";
// import React from "react";
// import HorizontalScroll from "../horizontalScroll";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"


// export default function Categories({ categories }: { categories: Category[] }) {
//   return (
    
      
//       <Carousel className="mx-20">
//             <CarouselContent>
//             {/* .slice(0, 20) */}
//             {categories.map((category: Category, index: number) => {
//   return (
//     <CarouselItem key={index} className="flex justify-center gap-5">
//           <Link href={`/${category.id}`} passHref>
//             {category.name}
//           </Link>
//         </CarouselItem>
//   );
// })}
             
//              </CarouselContent>
//              <CarouselPrevious />
//              <CarouselNext />
//            </Carousel>
      
  
//   );
// }
// {Array.from({ length: 5 }).map((_, index) => (
//   <CarouselItem key={index} className="basis-1/3 h-[400px] ">
//     <img
//       src={`https://http.cat/${index * 100 + 200}`}
//       alt=""
//       className="object-center object-cover w-full h-full"
//     />
//   </CarouselItem>
// ))}