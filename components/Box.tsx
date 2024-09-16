'use client';

import { animate, inView } from "motion";
import { ReactNode, useEffect } from "react";

export default function Box({ children }: { children: ReactNode }){
    useEffect(() => {
        inView('article',({ target }) => {
            const divs = target.querySelectorAll('div');
            divs.forEach((div) => {
                animate(
                    div as HTMLDivElement,
                    { opacity: 1, transform: "none" },
                    { delay:0.2, duration:0.9, easing: [0.17, 0.55, 0.55, 1] }
                );
            });
        });
    },[]);
    return (
        <section className="grid grid-cols-subgrid col-span-12 h-screen bg-grey-50 py-4 px-1">
            {children}
        </section>
    )
}