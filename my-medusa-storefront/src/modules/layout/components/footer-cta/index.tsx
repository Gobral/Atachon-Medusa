import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-orange-600 w-full text-black">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-3 relative">
        <div>
          <h3 className="text-2xl-semi">Don&apos;t look at this cat – the more you look at it – the more time we need to finish this site.</h3>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/kotek.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
