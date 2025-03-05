import Image from "next/image"

const ExcoCard = ({ src, post, name, department, className, className2 }) => {
  return (
    <section className={`flex flex-col gap-2 w-full laptop:w-1/3 ${className2}`}>
        <div className="w-full">
            <img src={src} alt={`${post} picture`} className={`object-cover rounded-md ${className}`} height={1000} width={1000} />
        </div>
        <div className="flex flex-col">
            <p className="text-center font-semibold text-lg tablet:text-xl">{name}</p>
            <p className="text-center font-medium text-lg tablet:text-xl">{post}</p>
            <p className="text-center text-base">{department}</p>
        </div>
    </section>
  )
}

export default ExcoCard