import Grid from './Grid';
import Image from 'next/image';
import LinkIcon from './Icons/Link';
import React from 'react';
import Gallery from './Gallery';
import Modal from './Modal';
import Play from './Icons/Play';

export default function Portfolio() {
  const [open, setOpen] = React.useState(false);
  const [selectProject, setSelectProject] = React.useState(0);
  const handleGalleryOpen = (title: string) => {
    setOpen(true);
    const titles = projectWithVideos.map(({ title }) => title);
    setSelectProject(titles.indexOf(title));
  };
  return (
    <>
      <Grid
        items={projects.map(({ image, link, title, description, video }) => (
          <div key={image} className="relative h-full w-full">
            <Image title={title} src={`/images/${image}`} alt={title} fill sizes="370px" />
            <div className="absolute inset-0 flex select-none flex-col items-center justify-evenly bg-orange text-white opacity-0 shadow-zinc-600 transition-opacity text-shadow hover:opacity-90">
              <h3 className="text-2xl drop-shadow-2xl">{title}</h3>
              <p className="max-w-xs justify-center text-center">{description}</p>
              <div className="flex gap-3">
                <a href={link} target="_blank" className="h-12 w-12 rounded-full bg-white p-3">
                  <LinkIcon size={24} />
                </a>
                {video && (
                  <button
                    aria-label="assistir vídeo"
                    onClick={() => handleGalleryOpen(title)}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
                  >
                    <Play size={36} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        cols="2"
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Gallery items={projectWithVideos} initialIndex={selectProject} />
      </Modal>
    </>
  );
}

const Trybe = (
  <a className="mx-1 text-green-300 underline text-shadow-none" href="https://betrybe.com/">
    Trybe
  </a>
);

const projects = [
  {
    image: 'won-games.jpg',
    link: 'https://curso-wongames.vercel.app',
    title: 'Won Games',
    description:
      'Projeto fullstack com integração de várias techs como: Nextjs, Styled Components, Typescript, GraphQL, Jest, Cypress',
  },
  {
    video:
      'https://dms-exp3.licdn.com/playlist/vid/D4D05AQHwuoZ1XUG7nw/mp4-720p-30fp-crf28/0/1682527221949?e=1688749200&v=beta&t=aiQ-hviCikKEEcw0npeQa1ZdPjF205nj1RRoqQ95g6g',
    image: 'pixel-art.jpg',
    link: '#',
    title: 'Pixel Art',
    description: (
      <span>
        Um dos projetos do módulo de fundamentos da {Trybe}, feito usando apenas javascript
      </span>
    ),
  },
  {
    video:
      'https://dms-exp3.licdn.com/playlist/vid/D4D05AQG7paqE4vUW9Q/mp4-720p-30fp-crf28/0/1688060209459?e=1688745600&v=beta&t=xzqTlMOnNfSLTANiJYXi0gyC1HoRrV7mqfH-fX9D6ks',
    image: 'trivia.jpg',
    link: '#',
    title: 'Trivia',
    description: (
      <span>
        Projeto desenvolvido em grupo no módulo de front-end da {Trybe}, feito usando React, Redux e
        consumindo uma API
      </span>
    ),
  },
  {
    video:
      'https://dms-exp3.licdn.com/playlist/vid/D4D05AQFXQkZWrFVjyg/mp4-720p-30fp-crf28/0/1686929809761?e=1688749200&v=beta&t=-BDSGGtC9O3XqQKtVNpgI8ZM-1MjiPLmdp6gHVyhvOI',
    image: 'wallet.jpg',
    link: '#',
    title: 'Trybe Wallet',
    description: (
      <span>
        Projeto desenvolvido no módulo de front-end da {Trybe}, feito usando React, Redux e
        consumindo uma API
      </span>
    ),
  },
  {
    video:
      'https://dms-exp3.licdn.com/playlist/vid/D4D05AQHOQL_HNcKIyw/mp4-720p-30fp-crf28/0/1683918495005?e=1688752800&v=beta&t=JasLA1MCggh3NI7_ADC8kXV7m9uXJFpXt1Weaow9pFQ',
    image: 'tryunfo.jpg',
    link: '#',
    title: 'Tryunfo',
    description: (
      <span>Projeto desenvolvido no módulo de front-end da {Trybe}, feito usando React</span>
    ),
  },
  {
    video:
      'https://dms-exp3.licdn.com/playlist/vid/D4D05AQHU1mek2Dr3uA/mp4-720p-30fp-crf28/0/1684534867614?e=1688752800&v=beta&t=sWdjdVN2KC84gPI9ILn5dQGxV8VAmDfVjr3vzRobqBM',
    image: 'tunes.jpg',
    link: '#',
    title: 'Trybe Tunes',
    description: (
      <span>
        Projeto desenvolvido no módulo de front-end da {Trybe}, feito usando React, React Router e
        consumindo uma API
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

const projectWithVideos = projects.filter(({ video }) => video);
