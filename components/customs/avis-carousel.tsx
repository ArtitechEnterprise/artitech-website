import React from "react";
import CardAvis from "./card-avis";

const AvisCarrousel = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3">
      <CardAvis />
      <CardAvis />
      <CardAvis />
    </div>
  );
};

export default AvisCarrousel;
