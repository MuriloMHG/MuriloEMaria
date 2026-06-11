import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const CONFIG = {
  nome1: 'Murilo',
  nome2: 'Nome dela',
  fraseInicial: 'Algumas histórias são tão bonitas que merecem ser guardadas para sempre.',
  textoFinal: `Meu amor, cada foto aqui é só uma pequena parte de tudo que eu sinto por você. Obrigado por ser carinho, parceria, paz e sonho dentro da minha vida. Eu amo viver ao seu lado e quero continuar construindo memórias lindas com você.`,
  perguntaFinal: 'Você aceita continuar sendo a namorada dos meus sonhos?'
}

const momentos = [
  {
    imagem: '/fotos/foto-01.jpg',
    titulo: 'Nosso começo',
    texto: 'Esse momento me lembra como tudo começou de um jeito especial e como, desde então, você se tornou uma das partes mais bonitas da minha vida.'
  },
  {
    imagem: '/fotos/foto-02.jpg',
    titulo: 'Um dia inesquecível',
    texto: 'Tem dias que ficam guardados no coração. Esse é um deles. Um daqueles momentos simples, mas cheios de significado.'
  },
  {
    imagem: '/fotos/foto-03.jpg',
    titulo: 'Meu lugar favorito',
    texto: 'Não importa muito o lugar. Quando estou com você, tudo fica mais leve, bonito e especial.'
  },
  {
    imagem: '/fotos/foto-04.jpg',
    titulo: 'Nós dois',
    texto: 'Gosto da forma como a gente combina, ri, conversa e transforma momentos comuns em lembranças que eu quero guardar para sempre.'
  },
  {
    imagem: '/fotos/foto-05.jpg',
    titulo: 'Para sempre lembrar',
    texto: 'Essa foto representa um pedacinho da nossa história. E eu espero que ainda venham muitos outros capítulos lindos pela frente.'
  }
]

const coracoesVaral = [
  { x: '9%', delay: '0s', duracao: '12s', tamanho: '15px', giro: '-10deg' },
  { x: '23%', delay: '3s', duracao: '14s', tamanho: '12px', giro: '8deg' },
  { x: '39%', delay: '6s', duracao: '13s', tamanho: '16px', giro: '-6deg' },
  { x: '57%', delay: '1.5s', duracao: '15s', tamanho: '13px', giro: '12deg' },
  { x: '73%', delay: '5s', duracao: '12.5s', tamanho: '15px', giro: '-14deg' },
  { x: '88%', delay: '8s', duracao: '16s', tamanho: '11px', giro: '7deg' }
]

const brilhosVaral = [
  { x: '7%', y: '8%', delay: '.3s', duracao: '3.8s', tamanho: '4px' },
  { x: '18%', y: '31%', delay: '1.4s', duracao: '4.6s', tamanho: '3px' },
  { x: '29%', y: '13%', delay: '2.1s', duracao: '5.1s', tamanho: '5px' },
  { x: '41%', y: '42%', delay: '.8s', duracao: '4.2s', tamanho: '3px' },
  { x: '54%', y: '19%', delay: '3.2s', duracao: '5.4s', tamanho: '4px' },
  { x: '63%', y: '62%', delay: '1.9s', duracao: '4.9s', tamanho: '3px' },
  { x: '78%', y: '35%', delay: '.6s', duracao: '4.4s', tamanho: '5px' },
  { x: '91%', y: '11%', delay: '2.7s', duracao: '5.8s', tamanho: '3px' },
  { x: '12%', y: '72%', delay: '4s', duracao: '5.2s', tamanho: '4px' },
  { x: '35%', y: '83%', delay: '1.1s', duracao: '4.7s', tamanho: '3px' },
  { x: '70%', y: '86%', delay: '3.6s', duracao: '5.6s', tamanho: '4px' },
  { x: '86%', y: '70%', delay: '2.4s', duracao: '4.8s', tamanho: '3px' }
]

function App() {
  const [abriu, setAbriu] = useState(false)

  return (
    <main>
      {!abriu && (
        <section className="hero">
          <div className="heroCard">
            <p className="eyebrow">Feliz Dia dos Namorados</p>
            <h1>{CONFIG.nome1} & {CONFIG.nome2}</h1>
            <p className="frase">{CONFIG.fraseInicial}</p>
            <button onClick={() => setAbriu(true)}>Abrir surpresa</button>
          </div>
          <div className="coracao c1">♥</div>
          <div className="coracao c2">♥</div>
          <div className="coracao c3">♥</div>
        </section>
      )}

      <section className={`conteudo ${abriu ? 'visivel' : ''}`}>
        <header className="intro">
          <span>nossas memórias</span>
          <h2>Um varal de momentos que eu amo viver com você</h2>
          <p>Role devagar. Cada foto tem um pedacinho do que eu sinto por você.</p>
        </header>

        <section className="varal" aria-label="Linha do tempo de fotos">
          <div className="varalDecoracao" aria-hidden="true">
            {brilhosVaral.map((brilho, index) => (
              <span
                className="brilhoFundo"
                key={`brilho-${index}`}
                style={{
                  '--x': brilho.x,
                  '--y': brilho.y,
                  '--delay': brilho.delay,
                  '--duracao': brilho.duracao,
                  '--tamanho': brilho.tamanho
                }}
              />
            ))}
            {coracoesVaral.map((coracao, index) => (
              <span
                className="coracaoSubindo"
                key={`coracao-varal-${index}`}
                style={{
                  '--x': coracao.x,
                  '--delay': coracao.delay,
                  '--duracao': coracao.duracao,
                  '--tamanho': coracao.tamanho,
                  '--giro': coracao.giro
                }}
              />
            ))}
          </div>
          <svg className="corda" viewBox="0 0 120 1200" preserveAspectRatio="none" aria-hidden="true">
            <path className="cordaSombra" d="M58 0 C47 90 73 155 58 255 C43 354 75 434 59 535 C44 633 76 720 60 812 C45 907 70 1001 56 1200" />
            <path className="cordaBase" d="M58 0 C47 90 73 155 58 255 C43 354 75 434 59 535 C44 633 76 720 60 812 C45 907 70 1001 56 1200" />
            <path className="cordaFibra" d="M64 0 C53 90 79 155 64 255 C49 354 81 434 65 535 C50 633 82 720 66 812 C51 907 76 1001 62 1200" />
          </svg>
          {momentos.map((momento, index) => (
            <article className={`momento ${index % 2 === 0 ? 'esquerda' : 'direita'}`} key={momento.titulo}>
              <div className="prendedor"></div>
              <div className="polaroid">
                <img src={momento.imagem} alt={momento.titulo} onError={(e) => { e.currentTarget.src = '/fotos/placeholder.svg' }} />
                <h3>{momento.titulo}</h3>
                <p>{momento.texto}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="final">
          <p>{CONFIG.textoFinal}</p>
          <h2>{CONFIG.perguntaFinal}</h2>
          <div className="botoesFinais">
            <button onClick={() => alert('Eu te amo! 💖')}>Sim, para sempre</button>
            <button className="ghost" onClick={() => alert('Resposta errada, tente de novo 😅💘')}>Também sim</button>
          </div>
        </section>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
