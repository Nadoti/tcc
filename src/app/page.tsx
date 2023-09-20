'use client'
import { CardSmartphone } from "../components/cardSmartphone/CardSmartphone";
import { Header } from "../components/header/Header";
import { Main } from "../components/pages/home/main/Main";
import { SmartphonesPromotion } from "@/components/pages/home/smartphonesPromotion/SmartphonesPromotion";
import { BestPricesThisWeek } from "@/components/pages/home/bestPricesThisWeek/BestPricesThisWeek";


export default function Home() {
  return (
    <section>
      <Header />
      <Main />
      <SmartphonesPromotion />
      <BestPricesThisWeek />
    </section>
  )
}
