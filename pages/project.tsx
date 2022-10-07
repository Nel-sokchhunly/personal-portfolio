import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { motion } from 'framer-motion';
import { projects, projectsType } from '../data/projects';
import Image from 'next/image';
import { spawn } from 'child_process';

export default function Project() {
  return (
    <MainLayout>
      <ProjectPage projects={projects} amount={projects.length} />
    </MainLayout>
  );
}

function ProjectPage({ projects, amount }) {
  const [activePage, setActivePage] = useState(0);

  const updateActivePage = (index) => setActivePage(index);

  return (
    <div className='overflow-hidden h-full flex-grow flex flex-col relative'>
      <ProjectDetailPage index={activePage} />
      {/* projects bar */}
      <motion.div
        className='w-full h-fit bg-accent2 flex sticky bottom-0 left-0'
        layout
      >
        {projects.map((project: projectsType, index) => (
          <ProjectNavBtn
            index={index}
            key={index}
            activePage={activePage}
            updateActivePage={updateActivePage}
          />
        ))}
      </motion.div>
    </div>
  );
}

const ProjectDetailPage = ({ index }) => {
  const project = projects[index];
  return (
    <div className='p-4 flex flex-col sm:flex-row h-full'>
      <div className='flex justify-center sm:justify-start'>
        <div className='h-72 w-full sm:w-96 border-2 border-secondary flex flex-col hover:shadow-sm hover:shadow-secondary transition duration-200'>
          <div className='relative flex-1 w-full flex items-center justify-center bg-opacity-30 font-medium whitespace-pre-wrap'>
            <Image src={project.poster} layout='fill' objectFit='cover' />
          </div>
          <div className='font-semibold text-center border-t-2 border-black py-4 bg-opacity-50 hover:bg-primary focus:bg-primary'>
            {project.title}
          </div>
        </div>
      </div>
      <div className='w-full xl:w-3/5 sm:pl-4 pt-4 sm:pt-0'>
        <div className='text-xl hidden sm:block font-semibold'>
          {project.title}
        </div>
        <div>{project.description}</div>
        <br />
        <div>
          Technologies:{' '}
          {project.technologies.map((tech) => (
            <span className='m-2 p-1 px-2 border-2 border-accent2 rounded-full'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectNavBtn = ({ index, activePage, updateActivePage }) => {
  // scenario
  let activeButton =
    'bg-primary text-black flex-grow sm:flex-grow-0 text-center';
  let inActiveButton = '';
  // btn 1 (activePage 0) => btn1:primary, btn2:accent-1, btn3:accent-2
  if (activePage === 0) {
    if (index == 1) inActiveButton = 'bg-accent1 text-white';
    else if (index == 2) inActiveButton = 'bg-accent2 text-white';
  }
  // btn 2 (activePage 1) => btn1:accent-1, btn:primary, btn3:accent-2
  if (activePage === 1) {
    if (index == 0) inActiveButton = 'bg-accent1 text-white';
    else if (index == 2) inActiveButton = 'bg-accent2 text-white';
  }
  // btn 3 (activePage 2) => btn1:accent-1, btn:accent-2, btn3:primary
  if (activePage === 2) {
    if (index == 0) inActiveButton = 'bg-accent2 text-white';
    else if (index == 1) inActiveButton = 'bg-accent1 text-white';
  }

  return (
    <motion.div
      className={`px-8 py-4 cursor-pointer  ${
        activePage === index ? activeButton : inActiveButton
      }`}
      onClick={() => updateActivePage(index)}
      transition={{ duration: 0.3 }}
      layout
    >
      {index + 1}
    </motion.div>
  );
};
