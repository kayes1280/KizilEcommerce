import type { Route } from "./+types/home";
import {Hero} from "./hero.tsx";
import {CategorySection} from "./exploreCate.tsx";
import { FlashDeals } from "./flashDeals.tsx";
import { NewArrivals } from "./newArival.tsx";
import { PopularBundles } from "./popularBundle.tsx";
import { TopPicks } from "./topPics.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "E-Commerce-Kizil" },
    { name: "description", content: "E-Commerce-Kizil" },
  ];
}

export default function Home() {
  return (
     <>
      <Hero />
      <CategorySection />
      <FlashDeals />
      <NewArrivals />
      <TopPicks />
      <PopularBundles />
    </>
  )
   
}
