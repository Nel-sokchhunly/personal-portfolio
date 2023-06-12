import MainLayout from '../../layouts/MainLayout';
import { projectsType } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '../../data/projects';

export default function Project() {
  return (
    <MainLayout>
      <div className='w-full min-h-full flex justify-center items-center mb-36 md:mb-0'>
        <div className='flex flex-wrap gap-10 justify-center items-center mt-10 md:mt-0'>
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
    <Link href={'/project/' + project.id}>
      <div
        className='
            cursor-pointer items-stretch h-72 w-72 md:w-96 border-2 border-secondary flex flex-col
            hover:shadow-md hover:shadow-secondary transition duration-200
          '
      >
        <div
          className={`relative flex-1 h-52 flex items-center justify-center bg-opacity-30 font-medium aspect-video`}
        >
          <Image
            src={project.poster}
            alt={project.title}
            className='h-full w-full object-cover aspect-video'
            fill
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
          <span className='relative'>
            <Image src='/assets/enter.png' alt='enter button' fill />
          </span>
        </button>
      </div>
    </Link>
  );
};
