import Grid from './Grid';
import Image from 'next/image';
import LinkIcon from './Icons/Link';
import React from 'react';
import Gallery from './Gallery';
import Modal from './Modal';
import Play from './Icons/Play';
import { Github } from './Icons/Github';

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
        items={projects.map(({ image, link, title, description, video, github }) => (
          <div key={image} className="relative h-full w-full">
            <Image
              title={title}
              src={`/images/${image}`}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex select-none flex-col items-center justify-evenly bg-orange text-white opacity-0 shadow-zinc-600 duration-500 text-shadow hover:opacity-90">
              <h3 className="text-2xl drop-shadow-2xl">{title}</h3>
              <p className="max-w-xs justify-center text-center">{description}</p>
              <div className="flex gap-3">
                {link && (
                  <a
                    aria-label="link"
                    href={link}
                    target="_blank"
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white p-3"
                  >
                    <LinkIcon size={24} />
                  </a>
                )}
                {github && (
                  <a
                    aria-label="github link"
                    href={github}
                    target="_blank"
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white p-3"
                  >
                    <Github size={24} />
                  </a>
                )}
                {video && (
                  <button
                    aria-label="assistir vídeo"
                    onClick={() => handleGalleryOpen(title)}
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white"
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
        <Gallery
          items={projectWithVideos}
          initialIndex={selectProject}
          onClose={() => setOpen(false)}
        />
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
    github: 'https://github.com/albertoflorence/react-avancado-curso',
    title: 'Won Games',
    description:
      'Projeto fullstack com integração de várias techs como: Nextjs, Styled Components, Typescript, GraphQL, Jest, Cypress',
  },
  {
    video:
      'https://dms-exp2.licdn.com/playlist/vid/D4D05AQF14Eg1amyJbQ/mp4-720p-30fp-crf28/0/1689951224727?e=1690905600&v=beta&t=SMqHSm4b242ksbmyTfzceZGrPxbAbGDXGc5so9hTzzk',
    image: 'recipes-app.jpg',
    github: 'https://github.com/albertoflorence/recipes-app',
    link: 'https://recipes-af.vercel.app',
    title: 'Recipes App',
    description: (
      <span>
        Projeto de conclusão de módulo da {Trybe}, feito usando React, React Router, Redux e
        consumindo uma API
      </span>
    ),
  },
  {
    video:
      'https://dms-exp2.licdn.com/playlist/vid/D4D05AQEE8D0-zKoy7w/mp4-720p-30fp-crf28/0/1688759152336?e=1690905600&v=beta&t=fQA3QII1e8Kw89MvQ6AfkTNhk9PWGN4dgB_WYDX8NMI',
    image: 'starwars.jpg',
    link: 'https://starwars-af.vercel.app',
    github: 'https://github.com/albertoflorence/starwars',
    title: 'Star Wars',
    description: (
      <span>
        Projeto desenvolvido no módulo de front-end da {Trybe}, feito usando React e Context Api
      </span>
    ),
  },
  {
    video:
      'https://dms-exp2.licdn.com/playlist/vid/D4D05AQHwuoZ1XUG7nw/mp4-720p-30fp-crf28/0/1682527221949?e=1690905600&v=beta&t=i__yPB5JrkXBK9gxGo-M8zEyiWWHnSIB_oq9DUBUjD4',
    image: 'pixel-art.jpg',
    github: 'https://github.com/albertoflorence/pixels-art',
    link: 'https://pixels-art-af.vercel.app',
    title: 'Pixel Art',
    description: (
      <span>
        Um dos projetos do módulo de fundamentos da {Trybe}, feito usando apenas javascript
      </span>
    ),
  },
  {
    video:
      'https://dms-exp2.licdn.com/playlist/vid/D4D05AQG7paqE4vUW9Q/mp4-720p-30fp-crf28/0/1688060209459?e=1690905600&v=beta&t=pDXq5cw-SbY5hpBjAK6QcGmG8KMbZ_yJz3c8rnbLgzM',
    image: 'trivia.jpg',
    github: 'https://github.com/albertoflorence/trivia',
    link: 'https://trivia-af.vercel.app',
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
      'https://dms-exp2.licdn.com/playlist/vid/D4D05AQFXQkZWrFVjyg/mp4-720p-30fp-crf28/0/1686929809761?e=1690905600&v=beta&t=ELKu4qy9zCO9EX1H6i5xgjA-SlUsZCMJkKI3WgwjvJs',
    image: 'wallet.jpg',
    github: 'https://github.com/albertoflorence/trybewallet',
    link: 'https://trybewallet-af.vercel.app',
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
      'https://dms-exp2.licdn.com/playlist/vid/D4D05AQHOQL_HNcKIyw/mp4-720p-30fp-crf28/0/1683918495005?e=1690905600&v=beta&t=4dXRKssWXU3WBDiJMTKySlEx_J09-9ZrW1L019PBfoc',
    image: 'tryunfo.jpg',
    github: 'https://github.com/albertoflorence/tryunfo',
    link: 'https://tryunfo-af.vercel.app/',
    title: 'Tryunfo',
    description: (
      <span>Projeto desenvolvido no módulo de front-end da {Trybe}, feito usando React</span>
    ),
  },
  {
    video:
      'https://dms-exp2.licdn.com/playlist/vid/D4D05AQHU1mek2Dr3uA/mp4-720p-30fp-crf28/0/1684534867614?e=1690905600&v=beta&t=ivZa_duykFbsdyg7GOCauP567yYHecGxNWQ_RkLvLMk',
    image: 'tunes.jpg',
    github: 'https://github.com/albertoflorence/trybetunes',
    link: 'https://trybetunes-af.vercel.app',
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
    github: 'https://github.com/albertoflorence/ragnarok-mercado',
    title: 'Ragnarok Marketplace',
    description: 'Feito para filtrar e mostrar itens vendidos em lojinhas no Ragnarok Online',
  },
  {
    image: 'clean-api.jpg',
    github: 'https://github.com/albertoflorence/clean-architecture-api',
    title: 'Clean Architecture',
    description:
      'Projeto de uma Api RESTful com integração de várias techs como: Typescript, Express, MongoDB, Jest, Docker, Swagger',
  },
];

const projectWithVideos = projects.filter(({ video }) => video);
