import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { motion } from 'framer-motion';
import { projects, projectsType } from '../data/projects';
import Image from 'next/image';

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
    <div className='overflow-hidden h-full flex flex-col'>
      <div className='h-full'>
        <ProjectDetailPage index={activePage} />
      </div>
      {/* projects bar */}
      <motion.div className='w-full h-fit bg-accent2 flex' layout>
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
    <div className='p-4'>
      <div className='flex justify-center sm:justify-start'>
        <div className='h-72 w-full md:w-96 border-2 border-secondary flex flex-col hover:shadow-sm hover:shadow-secondary transition duration-200'>
          <div className='relative flex-1 w-full flex items-center justify-center bg-opacity-30 font-medium whitespace-pre-wrap'>
            <Image src={project.poster} layout='fill' objectFit='cover' />
          </div>
          <div className='text-center border-t-2 border-black py-4 bg-opacity-50 hover:bg-primary focus:bg-primary'>
            Nel Sokchhunly
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectNavBtn = ({ index, activePage, updateActivePage }) => {
  // scenario
  let activeButton = 'bg-primary text-black flex-grow text-center';
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
      className={`px-8 py-4  ${
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
