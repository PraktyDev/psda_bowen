import Image from "next/image"

const PastExcoCard = ({ src, name, year, className }) => {
  return (
    <section className={`flex flex-col gap-2 w-full`}>
        <div className="w-full">
            <img src={src} alt={`${name} picture`} className={`h-[400px] rounded-md ${className}`} height={1000} width={1000} />
        </div>
        <div className="flex flex-col">
            <p className="text-center font-semibold text-lg ">{name}</p>
            <p className="text-center text-base">{year}</p>
            <p className="text-center text-base font-semibold">President</p>
        </div>
    </section>
  )
}

export default PastExcoCard