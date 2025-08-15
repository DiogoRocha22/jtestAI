'use client'

import BackgroundParticles from "@/components/layout/BackgroundParticles";
import Button from "@/components/ui/Button";
import Greeting from "@/components/ui/Greeting";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans h-full flex flex-col flex-1" >
      <main className="flex flex-col flex-1 items-center justify-center h-full -mt-10 text-center px-6">
        <Greeting />

        <p className="text-2xl text-gray-600">
          Gere testes unitários de maneira rápida e fácil com JTest
        </p>

        <Link href="/chat">
          <Button variant="gradient" className="mt-10 text-xl text-black font-bold py-3 hover:scale-105 transition-all duration-300">Começar Agora</Button>
        </Link>
      </main>

      <BackgroundParticles />
    </div>
  );
}
  