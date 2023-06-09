import { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { projectsType } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '../../data/projects';

export default function Project() {
  return (
    <MainLayout>
      <div className='w-full min-h-full flex justify-center items-center p-4'>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
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
    <div className='items-stretch h-72 w-72 md:w-96 border-2 border-secondary flex flex-col  hover:shadow-md hover:shadow-secondary transition duration-200'>
      <div
        className={`flex-1 h-fit w-full flex items-center justify-center bg-opacity-30 font-medium aspect-square`}
      >
        <img
          src={project.poster}
          alt={project.title}
          className='h-full object-cover aspect-video'
        />
      </div>
      <Link href={'/project/' + project.id}>
        <button
          typeof='button'
          className={`
             w-full flex justify-center border-t-2 border-black py-4 cursor-pointer ${color} bg-opacity-50
            font-bold 
          `}
        >
          {project.title}
        </button>
      </Link>
    </div>
  );
};
