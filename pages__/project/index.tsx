import MainLayout from '../../layouts/MainLayout';
import { projectsType } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '../../data/projects';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();

  // prefetch project pages
  useEffect(() => {
    projects.forEach((project) => {
      router.prefetch('/project/' + project.id);
    });
  }, []);

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
            cursor-pointer items-stretch h-fit w-72 md:w-80 xl:w-96  border-secondary flex flex-col
            transition duration-300
            box-content relative group
          '
      >
        <div
          className='
            group-hover:-translate-y-1 group-hover:translate-x-1
            transition duration-300 z-[1] 
            border-2 border-stone-700 box-border overflow-clip
            bg-white rounded-sm
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
            w-full flex justify-center items-center gap-2 border-t-2 border-stone-700 py-4 cursor-pointer ${color}
            font-bold bg-opacity-50
          `}
          >
            {project.title}
            <img
              src='assets/open-link.png'
              alt='enter button'
              className='h-4 w-4 object-contain'
            />
          </button>
        </div>

        <div
          className='
              h-full w-full z-0 bg-black bg-opacity-80 absolute left-0 top-0
              group-hover:translate-y-1 group-hover:-translate-x-1
              transition duration-300 rounded-sm
            '
        ></div>
      </div>
    </Link>
  );
};
