'use client';

import { useState } from 'react';
import { Button } from './Button';
import Modal from './Modal';

export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="bg-white text-gray-300 shadow-md dark:bg-bgDarkLight dark:text-gray-100"
        onClick={() => setOpen(true)}
      >
        About me
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} className="max-w-4xl p-7">
        <h2 className="relative mb-6 w-fit text-3xl font-bold">
          About Me
          <div className="w-2/5 border-b-[3px] border-orange"></div>
        </h2>
        <p>
          Meu nome é Alberto S. Florence, sou um Desenvolvedor Full Stack residente em Atibaia, São
          Paulo. Trabalhava em uma pequena empresa como técnico de infraestrutura de redes e
          telefonia, mas comecei a me interessar e aprender sobre desenvolvimento web através do
          FreeCodeCamp, YouTube e cursos na plataforma Udemy. Apesar de ter adquirido muito
          conhecimento sobre programação estudando por conta própria, percebi a necessidade de
          desenvolver outras habilidades, como as interpessoais e o trabalho em grupo. Por isso,
          atualmente estou cursando a escola de tecnologia <Trybe /> Estou entusiasmado com as
          possibilidades que a área de desenvolvimento oferece e estou em constante busca por novas
          oportunidades e desafios que me permitam crescer como profissional. Tenho interesse em
          trabalhar em projetos inovadores, colaborar com equipes talentosas e me manter atualizado
          com as tendências e avanços tecnológicos. Se você quiser saber mais sobre minha
          experiência e habilidades, fique à vontade para visitar meu perfil no
          <Link href="https://linkedin.com/in/albertoflorence/"> LinkedIn</Link> e
          <Link href="https://github.com/albertoflorence"> GitHub.</Link> Você também pode entrar em
          contato comigo através do{' '}
          <Link href="mailto:alberto.sabatier@gmail.com" target="_top">
            Email.{' '}
          </Link>
          Estou confiante de que, com minha paixão pela programação e minha busca contínua por
          conhecimento, posso fazer contribuições significativas em um ambiente de trabalho dinâmico
          e colaborativo.
        </p>
      </Modal>
    </>
  );
}

const Link = (props: React.ComponentPropsWithoutRef<'a'>) => (
  <a target="_blank" className="font-semibold text-orange" {...props} />
);

const Trybe = () => (
  <a target="_blank" href="https://betrybe.com" className="font-semibold text-green-400">
    Trybe.
  </a>
);
