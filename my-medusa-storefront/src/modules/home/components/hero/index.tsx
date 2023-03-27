import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Andrzej!!! Page is under construction!!!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          You cannot buy anything through this site yet, but you can email us for more info wnd order a padzioch this way.
        </p>
        <UnderlineLink href="/store">Do not explore products</UnderlineLink>
      </div>
      <Image
        src="/padzioch.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="aaaaaaaa padziochh"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
