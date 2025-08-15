import Greeting from '@/components/ui/Greeting';
import React from 'react';
import MessageBox from '@/components/AI/MessageBox';

export default function ChatPage() {
  return (
    <div className="font-sans h-full flex flex-col flex-1">
      <main className="flex flex-col flex-1 items-center justify-center h-full -mt-10 text-center px-6">
        <Greeting />
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">
            Olá, eu sou o JTest, seu criador de testes unitários. Como posso ajudar você hoje?
          </p>
        </div>

        <section className="flex flex-col gap-4 w-full md:max-w-2xl mt-10">
          <MessageBox />
        </section>
      </main>
    </div>
  );
}
