"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

const CardAvis = () => {
  return (
    <Card className="p-4">
      <CardHeader className="flex-row items-center gap-3 p-0">
        <Avatar>
          <AvatarImage src="/avatar-image.jpg" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <div className="mb-2 space-y-px">
          <p className="text-sm">Ayanokoji Kiyotaka</p>
          <CardDescription>
            <p>01 / 10 / 2025</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-sm leading-6">
          &quot;Grâce à l’application, nous avons amélioré la planification de
          la maintenance, ce qui a réduit les coûts et amélioré notre
          productivité.&quot;
        </p>
      </CardContent>
      <CardFooter className="pb-0">
        <Image
          src={"/logo-dark.jpg"}
          alt="logo"
          width={100}
          height={100}
          loading="lazy"
          className="w-24"
        />
      </CardFooter>
    </Card>
  );
};

export default CardAvis;
