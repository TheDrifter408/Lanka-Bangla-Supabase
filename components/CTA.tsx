"use client";
import Image from "next/image";
import { useEffect } from 'react';
import { inView, animate } from 'motion';
import Statistics from "@/app/public/svg/Statistics.svg";

export default function CTA(){
    useEffect(() => {
        inView('article',({ target }) => {
            animate(
                target.querySelector('div') as HTMLDivElement,
                { opacity: 1, transform: "none" },
                { delay:0.2, duration:0.9, easing: [ 0.17, 0.55, 0.55, 1 ] }
            );
        });
    },[]);
    return (
        <section className="col-span-12 grid grid-cols-subgrid gap-2 items-center h-screen bg-left-bottom bg-gradient-to-r from-gray-100 to-emerald-100 ">
            <article className="col-span-6 rounded-lg grid grid-cols-subgrid">
                <div className="col-span-5 mt-4 mx-2 opacity-0 -translate-x-10 pl-4">
                <h1 className="text-6xl font-bold">Empowering Growth Through Strategic Investments.</h1>
                <h2 className="text-slate-600 text-3xl">Tailored Investment Solutions for Future Prosperity</h2>
                <button className="px-4 py-2 border border-black bg-black font-bold text-white rounded-2xl my-2 transition-colors duration-200 hover:bg-gray-100 hover:text-black">Get Started</button>
                </div>
            </article>
            <article className="col-span-6 grid grid-cols-subgrid rounded-lg">
            <div className="col-span-6 mx-auto opacity-0 translate-x-10">
                <Image src={Statistics} width={600} height={600} alt="hero image" />
            </div>
            </article>
          </section>
    )
}   