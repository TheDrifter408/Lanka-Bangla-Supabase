import Box from "@/components/Box";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import Header from "@/components/Header";

import House from '@/app/public/img/home.png';
import Sewing from '@/app/public/img/Hand-sewing.png';
import Business from '@/app/public/img/businesswomen.png';
import Money from '@/app/public/img/Money-exchange.png';


const cards = [
  {
    id:1,
    title:"CMSME",
    desc: "Cottage, Micro,Small & medium Enterprises (CMSME)s are acknowledged to catalysts of any growing economy.",
    img:Sewing
  },
  {
    id:2,
    title:"Retail",
    desc:"LankaBangla offering a wide variety of retail financial services to kickstart your journey of financial success and freedom.",
    img:House
  },
  {
    id:3,
    title:"Deposit",
    desc:"LankaBangla Finance PLC is a place where you can find your every financial solution, join us today we'll take care of the rest.",
    img:Money
  },
  {
    id:4,
    title:"Shikha",
    desc:"Shikha is a platform to support and motivate women entrepreneurship through diverse products and services and create window for sharing ideas ",
    img:Business
  },
]

export default async function Index() {
  return (
    <div className="bg-gray-100 grid grid-cols-12 overflow-x-hidden ">
      <Header />
      <main className="bg-white grid grid-cols-subgrid col-span-12 rounded-lg items-center justify-around">
        <CTA />
        <Box>
        <article className="col-span-4 lg:col-start-2 row-span-2 place-self-center">
            <div className="col-span-4 -translate-x-10">
              <h1 className="text-7xl text-black text-center font-extrabold">What We Offer</h1>
            </div>
          </article>
          <article className="col-span-8 lg:col-start-6 grid grid-cols-subgrid gap-1">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} desc={card.desc} img={card.img} />
          ))}
          </article>
        </Box>
      </main>
    </div>
  );
}
