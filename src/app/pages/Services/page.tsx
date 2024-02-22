'use client'
import { WhatsappLogo } from "@phosphor-icons/react"
import Link from 'next/link'
import Image from "next/image"

export default function Services() {
  return (
    <main id="services" className="flex flex-col items-center p-8 bg-zinc-1s00">
      <h1 className="text-xl gradient-text font-semibold lg:text-4xl mt-20 mb-20">
        Conheça nossos principais serviços
      </h1>

      <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-24">
        <div className="flex items-center flex-col gap-2 w-full lg:w-[250px]">
          <Image src={'/rocket.png'} alt="" width={210} height={210} />
          <h1 className="text-purplex text-center font-semibold text-sm lg:text-2xl">Tráfego Digital</h1>
          <p className="text-zinc-400 lg:mt-8  text-sm text-center">Transparência é algo crucial para nós.
            Aliás, gostamos muito disso. E é por
            isso que você tem acesso a todos os
            números de sua performance conosco.</p>
        </div>
        <div className="flex items-center flex-col gap-2 lg:w-[250px]">
          <Image src={'/light.png'} alt="" width={210} height={210} />
          <h1 className="text-bluex text-center font-semibold text-sm lg:text-2xl">Criação de seu infoproduto</h1>
          <p className="text-zinc-400 text-sm text-center">Transparência é algo crucial para nós.
            Aliás, gostamos muito disso. E é por
            isso que você tem acesso a todos os
            números de sua performance conosco.</p>
        </div>
        <div className="flex items-center flex-col gap-2 lg:w-[250px]">
          <Image src={'/education.png'} alt="" width={210} height={210} />
          <h1 className="text-purplex text-center  font-semibold text-sm lg:text-2xl">Mentorias</h1>
          <p className="text-zinc-400 lg:mt-8 text-sm text-center">Transparência é algo crucial para nós.
            Aliás, gostamos muito disso. E é por
            isso que você tem acesso a todos os
            números de sua performance conosco.</p>
        </div>
        <div className="flex items-center flex-col gap-2 lg:w-[250px]">
          <Image src={'/monitory.png'} alt="" width={210} height={210} />
          <h1 className="text-bluex text-center font-semibold text-sm lg:text-2xl">Gestão de ativos digitais</h1>
          <p className="text-zinc-400 text-sm text-center">Transparência é algo crucial para nós.
            Aliás, gostamos muito disso. E é por
            isso que você tem acesso a todos os
            números de sua performance conosco.</p>
        </div>
        <div className="flex items-center flex-col gap-2 lg:w-[250px]">
          <Image src={'/shopping.png'} alt="" width={210} height={210} />
          <h1 className="text-purplex text-center font-semibold text-sm lg:text-2xl">Design de marcas e Landing Pages</h1>
          <p className="text-zinc-400 text-sm text-center">Transparência é algo crucial para nós.
            Aliás, gostamos muito disso. E é por
            isso que você tem acesso a todos os
            números de sua performance conosco.</p>
        </div>
        <div className="flex items-center flex-col gap-2 lg:w-[250px]">
          <Image src={'/erva.png'} alt="" width={210} height={210} />
          <h1 className="text-bluex text-center font-semibold text-sm lg:text-2xl">Branding e posicionamento</h1>
          <p className="text-zinc-400 text-sm text-center">Transparência é algo crucial para nós.
            Aliás, gostamos muito disso. E é por
            isso que você tem acesso a todos os
            números de sua performance conosco.</p>
        </div>

      </div>

      <h1 className="text-msg my-28 text-3xl lg:w-[900px] text-center lg:text-5xl  leading-10">
        Quer saber como vamos levar você para o próximo nível do seu negócio?
      </h1>

      <div className="flex lg:flex-row flex-col gap-4">
        <Link href="https://wa.me/16892702316"><button className="rounded-full flex items-center px-8 py-3 btn-style-one gap-2 text-xs lg:text-sm"><div className="txt flex items-center gap-2"><WhatsappLogo size={24} color="#FFF" /> QUERO SABER MAIS</div></button></Link>
      </div>
      <h1 className="text-msg my-28 text-4xl opacity-30  text-center lg:text-6xl  leading-10">
        #somostodosgrowfy
      </h1>
    </main>
  )
}