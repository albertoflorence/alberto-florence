import clsx from 'clsx';
import Grid from './Grid';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <Grid
      items={projects.map(({ image, link, title }) => (
        <a key={image} href={link} target="_blank">
          <Image
            title={title}
            src={`/images/${image}`}
            alt={title}
            fill
            sizes=""
            className={clsx('fill-black transition-transform hover:scale-110')}
          />
        </a>
      ))}
      cols="2"
    />
  );
}

const projects = [
  { image: 'Group 3.jpg', link: '#', title: '' },
  { image: 'Group 4.jpg', link: '#', title: '' },
  { image: 'Group 5.jpg', link: '#', title: '' },
  { image: 'Group 6.jpg', link: '#', title: '' },
  { image: 'Group 7.jpg', link: '#', title: '' },
  { image: 'Group 8.jpg', link: '#', title: '' },
];
