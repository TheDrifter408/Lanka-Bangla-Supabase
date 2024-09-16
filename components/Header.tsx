'use client'

import { useState } from "react"
export default function Header(){
    const [isOpen,setIsOpen] = useState(false);
    function menuClick(){
        if(isOpen){
            setIsOpen(() => false);
        } else {
            setIsOpen(()=> true);
        }
    }
    return(
        <header className="col-span-12 w-[100%] bg-gray-100 text-black mx-auto rounded-lg grid grid-cols-subgrid gap-2 items-center h-14 px-2 relative">
            <h1 className="col-span-3 lg:col-span-2 font-[700]">LankaBangla Ltd</h1>
            <nav className="invisible col-start-5 col-span-1 flex gap-2 lg:visible lg:col-start-3 lg:col-span-3">
                <a className="font-semibold underline-offset-2 hover:underline" href="http://" target="_blank" rel="noopener noreferrer">Solutions</a>
                <a className="font-semibold underline-offset-2 hover:underline" href="http://" target="_blank" rel="noopener noreferrer">About us</a>
                <a className="font-semibold underline-offset-2 hover:underline" href="http://" target="_blank" rel="noopener noreferrer">Resources</a>
            </nav>
            <button className="col-start-8 lg:col-start-10 col-span-2 lg:col-span-1 border border-black bg-black font-bold text-white rounded-lg my-2 py-2 transition-colors duration-200 hover:bg-white hover:text-black">
                Get Started
            </button>
            <button className="col-start-10 col-span-2 lg:col-span-1 border border-orange-400 bg-orange-400 rounded-lg py-2 font-extrabold transition-colors duration-200 hover:bg-white hover:text-black">Sign In</button>
            <button className="col-start-12 justify-self-center w-12 lg:w-1/3 border py-0 rounded-lg border-gray-5 00 transition-transform duration-200 hover:bg-slate-100" onClick={menuClick}>
                <div className="flex flex-col gap-1 h-9 items-center justify-center">
                    <div className={`h-1 w-1/2 bg-orange-500 rounded-lg transform transition-transform duration-200 ${isOpen ? 'rotate-45 w-1/3 translate-y-0.5' : 'rotate-0'}`}></div>
                    <div className={`h-1 w-1/2 bg-orange-500 rounded-lg transform transition-transform duration-200 ${isOpen ? 'scale-x-75 -translate-x-1' : 'scale-100'}`}></div>
                    <div className={`h-1 w-1/2 bg-orange-500 rounded-lg transform transition-transform duration-200  ${isOpen ? '-rotate-45 w-1/3 -translate-y-0.5' : 'rotate-0'}`}></div>
                </div>
                </button>
            <div className="absolute top-14 right-4">
                <nav className={`grid gap-4 items-start justify-start px-4 py-2 rounded-l-md bg-white shadow-lg origin-top duration-200 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-44 opacity-0"}`}>
                <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black">Events</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Career</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Investor Relations</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Regulatory disclosure</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Fees & Charges</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Rates of Interest</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Payment Solutions</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Complaint Cell</a>
            <a className="font-semibold mx-2 pb-2 transition-transform duration-200 border-b hover:border-b-black ">Life at LankaBangla</a>
                </nav>
            </div>
        </header>
    )
}