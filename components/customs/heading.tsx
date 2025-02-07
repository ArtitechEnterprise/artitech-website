import React from "react";

const Heading = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="text-pretty text-base font-light">{text}</p>
    </div>
  );
};

export default Heading;
