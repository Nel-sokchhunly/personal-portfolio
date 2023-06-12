import { projectsType } from '../../data/projects';
import MainLayout from '../../layouts/MainLayout';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { projects } from '../../data/projects';

export default function Project({
  project,
  accentColor
}: {
  project: projectsType;
  accentColor: string;
}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 15
    }
  });

  return (
    <MainLayout backUrl='/project'>
      <div className='w-full min-h-full p-4 mb-32 md:mb-0'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div
            className={`h-fit max-w-[500px] flex items-center justify-center bg-opacity-30 font-medium aspect-video my-4`}
          >
            <img
              src={project.poster}
              alt={project.title}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='col-span-2 md:px-4'>
            <h1 className='font-bold text-xl text-black text-opacity-90 my-4'>
              {project.title}
            </h1>

            <p className='whitespace-pre-line'>{project.description}</p>
          </div>
        </div>

        {/* technologies */}
        <div className='mt-8 flex flex-wrap gap-4 items-center'>
          <h3 className='font-bold text-lg'>Technologies : </h3>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => {
              const color =
                index % 3 === 0
                  ? 'bg-accent1'
                  : index % 3 === 1
                  ? 'bg-accent2'
                  : 'bg-accent3';

              return (
                <span className={`p-2 px-4 ${color} rounded-full text-white`}>
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* project screenshots */}
        {project.images && project.images.length > 0 && (
          <div>
            <h3 className='mt-8 font-bold text-lg'>Project Screenshots : </h3>

            {/* images slider for mobile */}
            <div className='my-4 md:hidden max-w-full mx-auto '>
              <div ref={sliderRef} className='keen-slider'>
                {project.images.map((image, index) => (
                  <div key={index} className='keen-slider__slide'>
                    <img
                      src={image}
                      alt={project.title}
                      className='h-full w-full full object-scale-down'
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='my-4 hidden md:flex flex-row flex-wrap w-full items-center justify-start gap-4'>
              {project.images.map((image, index) => (
                <div key={index} className='max-w-[300px] ring-1'>
                  <img
                    src={image}
                    alt={project.title}
                    className='h-fit w-full full object-fill'
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const project = projects.find(
    (project: projectsType) => project.id === params.id
  );

  const index = projects.findIndex((object: projectsType) => {
    return object.id === project.id;
  });

  const color =
    index % 3 === 0
      ? 'bg-accent1'
      : index % 3 === 1
      ? 'bg-accent2'
      : 'bg-accent3';

  return {
    props: {
      project: project,
      accentColor: color
    }
  };
}
