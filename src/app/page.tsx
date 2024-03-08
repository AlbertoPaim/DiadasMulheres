import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Feliz Dia das Mulheres meu amor</h1>
        <p className="text-lg text-gray-700">Luana Paim, neste Dia Internacional da Mulher, quero expressar o quanto você é especial para mim. Sua força, inteligência e gentileza inspiram não apenas a mim, mas a todos ao seu redor. Sua determinação e coragem são admiráveis, e seu amor e apoio significam o mundo para mim. Que este dia seja uma celebração do incrível ser humano que você é. Você é uma mulher incrível, e eu sou grato por tê-la em minha vida. Feliz Dia das Mulheres vida!</p>
      </header>
      <main className="flex flex-col items-center">
        <img
          src="/assets/lua.png"
          alt="Mulheres"
          className="w-full max-w-lg rounded-lg shadow-lg mb-8"
        />
        <p className="text-lg text-gray-700 mb-8">Hoje você terá diversas surpresas</p>
        <a href="https://wa.me/5571981154490?text=Verdade que eu vou ganhar 100 reais para eu gastar no que quiser ate final da tarde?? e que vou almoçar com você? e vou passar tempo com vc de qualidade , e ainda vou tomar açai no final da tarde? aaah te amo!" target="_blank">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Clique para saber suas surpresas</button>
        </a>
      </main>
      <footer className="text-center text-gray-500 text-sm mt-8">
        <p>Desenvolvido por Alberto com amor</p>
      </footer>
    </div>
  );
};

export default LandingPage;
