import Image, { StaticImageData } from "next/image"

type CardProps = {
    title:string,
    desc:string,
    img:StaticImageData
}
export default function Card({ title,desc,img }:CardProps){
    return(
        <div className={`bg-white col-span-4 lg:col-span-3 col-start-0 text-black p-4 border-2 border-black rounded-lg translate-x-10 duration-200 hover:scale-95 shadow-lg`}>
            <h1 className="text-center text-4xl font-bold">{title}</h1>
            <div className="mx-auto">
            <Image className="grayscale" src={img} width={300} height={300} alt={`${title}-image`} />
            </div>
            <p className="leading-5 font-semibold">{desc}</p>
        </div>
    )
}