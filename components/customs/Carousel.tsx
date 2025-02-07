import React from "react";
import CarouselData from "@/data/carousel";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
const Carousel = () => {
  return (
    <>
      {CarouselData.map((item) => (
        <Card className="space-y-4 border-none shadow-none" key={item.id}>
          <CardContent className="h-[230px] overflow-hidden rounded-3xl bg-red-600 px-0">
            <Image
              width={400}
              height={400}
              src={item.image}
              alt={item.type}
              loading="lazy"
              title={item.type}
            />
          </CardContent>
          <CardFooter className="flex-col items-start gap-3 px-0">
            <CardDescription className="text-base font-semibold text-black/70 dark:text-white">
              {item.description}
            </CardDescription>
            <Button className="rounded-full" size={"lg"} variant={"secondary"}>
              {item.type}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Carousel;
