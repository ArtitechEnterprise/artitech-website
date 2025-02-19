"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

const CardAvis = () => {
  return (
    <Card className="w-[400px] p-4">
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
      <CardContent className="pb-1 pt-2">
        <p className="text-sm">
          &quot;Grâce à l’application, nous avons amélioré la planification de
          la maintenance, ce qui a réduit les coûts et amélioré notre
          productivité.&quot;
        </p>
      </CardContent>
      <div className="flex items-center gap-1 px-5">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="h-4 w-4 fill-blue-500 stroke-none" />
        ))}
      </div>
    </Card>
  );
};

export default CardAvis;
