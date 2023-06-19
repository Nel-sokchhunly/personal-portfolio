import MainLayout from '../../layouts/MainLayout';
import { projectsType } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '../../data/projects';

export default function Project() {
  return (
    <MainLayout>
      <div className='w-full min-h-full flex justify-center items-center'>
        <div className='flex flex-wrap gap-10 justify-center items-center py-10 px-5 '>
          {projects.map((project: projectsType, index: number) => (
            <ProjectBtn key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

const ProjectBtn = ({
  project,
  index
}: {
  project: projectsType;
  index: number;
}) => {
  const color =
    index % 3 === 0
      ? 'bg-accent1'
      : index % 3 === 1
      ? 'bg-accent2'
      : 'bg-accent3';

  return (
    <Link key={index} href={'/project/' + project.id}>
      <div
        className='
        cursor-pointer items-stretch h-fit w-72 md:w-80 xl:w-96 border-2 border-secondary flex flex-col
        hover:shadow-md hover:shadow-secondary transition duration-200
        box-content
      '
      >
        <div
          className={`
            relative 
            h-52 w-72 md:w-80 xl:w-96 
            flex items-center justify-center flex-1 
            bg-opacity-30 font-medium aspect-video 
            
          `}
        >
          <Image
            src={project.poster}
            alt={project.title}
            className='object-center object-cover h-full w-full'
            fill
            priority
            quality={100}
            sizes='(max-width: 768px) 13rem, (max-width: 1024px) 20rem, 24rem'
          />
        </div>
        <button
          typeof='button'
          className={`
            w-full flex justify-center border-t-2 border-black py-4 cursor-pointer ${color} bg-opacity-50
            font-bold 
          `}
        >
          {project.title}
        </button>
      </div>
    </Link>
  );
};
