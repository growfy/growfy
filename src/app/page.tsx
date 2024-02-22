'use client'

import Image from 'next/image'
import Link from 'next/link'
import About from './pages/About/page'
import Services from './pages/Services/page'
import Footer from './pages/Footer/page'

import { DropDownIcon } from '@/components/DropIcon'
import { InstagramIcon } from '@/components/InstagramIcon'



export default function Home() {

  function handleScroll() {
    window.scrollTo({ top: 1000, behavior: 'smooth' })
  }

  function handleScrollServices() {
    window.scrollTo({ top: 3500, behavior: 'smooth' })
  }

  function handleScrollAbout() {
    window.scrollTo({ top: 2300, behavior: 'smooth' })
  }


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-home">

        <div className="z-10 w-full max-w-7xl items-center justify-between text-sm lg:flex">
          <p className=" left-0 top-0 flex w-full p-2 justify-center from-zinc-200  backdrop-blur-xl dark:border-neutral-800  dark:from-inherit lg:static lg:w-auto">
            <Image
              src="/logo.png"
              width={200}
              height={51}
              className='bg-go-100/10 rounded-sm p-2'
              alt="Growfy logo"
              priority
            />
          </p>
          <div className="fixed hidden lg:flex items-center h-48 w-full justify-center space-x-6 via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <div className="menu decoration-transparent">
              <ul className="space-x-6 mr-5">
                <a href="#home" onClick={handleScroll} className='hover:underline hover:underline-offset-8'>CONHEÇA A GROWFY</a>
                <a href="#sobre" onClick={handleScrollServices} className='hover:underline hover:underline-offset-8'>SERVIÇOS</a>
              </ul>
            </div>
            <Link
              className=" flex items-center gap-2 p-8 lg:px-8 lg:py-3 lg:rounded-full border hover:bg-zinc-100 hover:text-fuchsia-900 hover:transition-all duration-300 hover:duration-300"
              href="https://w.app/growfy"
              target="_blank"
              rel="noopener noreferrer"
            >
              COMECE A VENDER MAIS
            </Link>
            <Link href="https://instagram.com/olagrowfy"
              className='hover:opacity-60 transition-all hover:duration-300 duration-300'
              target='_blank'>
              <InstagramIcon />
            </Link>
          </div>
        </div>

        <div className="relative max-w-7xl flex lg:place-items-center ">
          <div className="flex flex-col max-w-5xl">
            <p className="text-weare lg:mt-10 mb-8">Somos o centro da inteligência, simplicidade e escala.</p>
            <h1 className='text-2xl lg:text-5xl'>
              Seu negócio, seu produto <span className=" text-arrow">{'>'}</span> <span className="font-bold">performando 10 vezes mais no digital.</span>
            </h1>
            <div className="flex flex-row justify-center lg:justify-start mt-96 lg:mt-10">
              <Link href="https://w.app/growfy"><button className="rounded-full px-8 bg py-3 mr-2 lg:mr-4 btn-style-one"><div className="txt text-sm">QUERO VENDER MAIS</div></button></Link>
              <button onClick={handleScrollAbout} className="rounded-full border px-8 py-3 hover:bg-zinc-100 hover:text-fuchsia-900 hover:transition-all duration-300 hover:duration-300 text-sm">SABER MAIS</button>
            </div>
          </div>
          <Image
            className="absolute mt-28 opacity-20 lg:opacity-1 lg:relative logo"
            src="/growhome.svg"
            alt="Growfy up Logo"
            width={55}
            height={55}
            priority
          />
        </div>
        <button
          onClick={handleScroll}
          className="hover:-scale-x-95 animate-bounce hover:transition-all"
        >

          <DropDownIcon />

        </button>

      </main>
      <About />
      <Services />
      <Footer />
    </>
  )
}
