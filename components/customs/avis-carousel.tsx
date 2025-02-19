import { Marquee } from "../ui/marquee";
import ReviewCard from "./review-card";

const reviews = [
  {
    name: "Aïcha",
    username: "@aicha",
    body: "Un service impeccable, bravo à l’équipe !",
    img: "https://avatar.vercel.sh/aicha",
  },
  {
    name: "Moussa",
    username: "@moussa",
    body: "Excellente innovation, continuez comme ça !",
    img: "https://avatar.vercel.sh/moussa",
  },
  {
    name: "Fatou",
    username: "@fatou",
    body: "Fiable, rapide et efficace. J’adore !",
    img: "https://avatar.vercel.sh/fatou",
  },
  {
    name: "Ibrahim",
    username: "@ibrahim",
    body: "Enfin une solution qui répond parfaitement à mes besoins !",
    img: "https://avatar.vercel.sh/ibrahim",
  },
  {
    name: "Kwame",
    username: "@kwame",
    body: "Juste incroyable ! Continuez sur cette lancée.",
    img: "https://avatar.vercel.sh/kwame",
  },
  {
    name: "Zainab",
    username: "@zainab",
    body: "Une startup qui tient ses promesses. Félicitations !",
    img: "https://avatar.vercel.sh/zainab",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const AvisCarrousel = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default AvisCarrousel;
