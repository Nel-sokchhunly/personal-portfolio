import MainLayout from '../../layouts/MainLayout';
import { projectsType } from '../../data/projects';

import { projects } from '../../data/projects';
import ProjectBtn from './ProjectBtn';

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
