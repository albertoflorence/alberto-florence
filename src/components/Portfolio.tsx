import Grid from './Grid';
import Image from 'next/image';
import LinkIcon from './Icons/Link';
import React from 'react';

export default function Portfolio() {
  return (
    <Grid
      items={projects.map(({ image, link, title, description }) => (
        <div key={image} className="relative h-full w-full">
          <Image title={title} src={`/images/${image}`} alt={title} fill sizes="370px" />
          <div className="absolute inset-0 flex select-none flex-col items-center justify-evenly bg-orange text-white opacity-0 shadow-zinc-600 transition-opacity text-shadow hover:opacity-90">
            <h3 className="text-2xl drop-shadow-2xl">{title}</h3>
            <p className="max-w-xs justify-center text-center">{description}</p>
            <a href={link} target="_blank" className="rounded-full bg-white p-3 ">
              <LinkIcon size={24} />
            </a>
          </div>
        </div>
      ))}
      cols="2"
    />
  );
}

const projects = [
  {
    image: 'won-games.jpg',
    link: 'https://curso-wongames.vercel.app',
    title: 'Won Games',
    description:
      'Projeto fullstack com integração de várias techs como: Nextjs, Styled Components, Typescript, GraphQL, Jest, Cypress',
  },
  {
    image: 'pixel-art.jpg',
    link: '#',
    title: 'Pixel Art',
    description: (
      <span>
        Um dos projetos do módulo de fundamentos da
        <a className="mx-1 text-green-300 underline text-shadow-none" href="https://betrybe.com/">
          Trybe,
        </a>
        feito usando apenas javascript
      </span>
    ),
  },
  {
    image: 'game-of-life.jpg',
    link: 'https://codepen.io/albertoflorence/pen/qXJENo',
    title: 'Game of Life',
    description: (
      <span>
        Um dos primeiros projetos que eu fiz quando estava aprendendo javascript pelo{' '}
        <a className="text-green-300 underline text-shadow-none" href="https://freecodecamp.org/">
          FreeCodeCamp
        </a>
      </span>
    ),
  },
  {
    image: 'ragnarok-mercado.jpg',
    link: 'https://ragnarok-mercado.surge.sh',
    title: 'Ragnarok Marketplace',
    description: 'Feito para filtrar e mostrar itens vendidos em lojinhas no Ragnarok Online',
  },
  {
    image: 'clean-api.jpg',
    link: 'https://github.com/albertoflorence/clean-architecture-api',
    title: 'Clean Architecture',
    description:
      'Projeto de uma Api RESTful com integração de várias techs como: Typescript, Express, MongoDB, Jest, Docker, Swagger',
  },
];
