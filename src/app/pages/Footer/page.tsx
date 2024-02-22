import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#292F3A] w-full py-10 lg:py-20 flex items-center justify-center flex-col gap-7">
      <Image src={'/icon-footer.png'} alt={'Logo footer'} width={138} height={30} />
      <p className="w-[px] text-xs lg:text-sm whitespace-pre-wrap text-zinc-500 text-center">
        Growfy Digital é uma marca do Grupo Livenbe © 2024 <br />
        Balneário Camboriú, Santa Catarina, Brasil - 30.509.270/0001-93</p>
    </div>
  )
}