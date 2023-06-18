import Image from 'next/image';

import { projectsType } from '../../data/projects';
import MainLayout from '../../layouts/MainLayout';

import { motion } from 'framer-motion';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { projects } from '../../data/projects';
import useViewImage from '../../components/modal/ViewImage';

export default function Project({ project }: { project: projectsType }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: 'center',
      perView: 'auto',
      spacing: 15
    }
  });

  const { toggle, ViewImageModal, setInitialSlide } = useViewImage({
    imageList: project.images
  });

  return (
    <>
      <ViewImageModal />

      <MainLayout backUrl='/project'>
        <div className='w-full min-h-full p-4 mb-32 md:mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className=''>
              <div
                className={`mx-auto max-h-[400px] max-w-[400px] relative aspect-video my-4`}
              >
                <Image
                  src={project.poster}
                  alt={project.title}
                  className='object-scale-down'
                  fill
                  priority
                />
              </div>
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
              <div>
                <h3 className='mt-8 font-bold text-lg'>
                  Project Screenshots :{' '}
                </h3>
                <span className='text-black text-opacity-50 text-xs font-medium'>
                  (click to view bigger image)
                </span>
              </div>

              {/* images slider for mobile */}
              <div className='my-4 h-[400px] md:hidden mx-auto flex flex-grow'>
                <div ref={sliderRef} className='keen-slider'>
                  {project.images.map((image, index) => (
                    <div
                      onClick={() => {
                        setInitialSlide(index);
                        toggle();
                      }}
                      key={index}
                      className='keen-slider__slide w-full relative flex items-start'
                      style={{ minWidth: '230px' }}
                    >
                      <Image
                        src={image}
                        alt={project.title}
                        fill
                        className='
                         w-auto h-auto object-left-top object-scale-down aspect-auto 
                        '
                        style={{
                          maxWidth: 'fit-content',
                          maxHeight: 'fit-content',
                          height: '100%',
                          width: '100%'
                        }}
                        quality={75}
                        sizes='400px'
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* bigger screen */}
              <div className='my-4 hidden md:flex flex-row flex-wrap w-full items-center justify-center gap-4'>
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className='max-w-[500px] max-h-[500px] relative cursor-pointer'
                    onClick={() => {
                      setInitialSlide(index);
                      toggle();
                    }}
                  >
                    <Image
                      src={image}
                      alt={project.title}
                      width={400}
                      height={450}
                      className='
                        max-w-[400px] max-h-[450px] w-auto h-auto 
                        object-scale-down aspect-auto 
                        transition duration-300 ease-in-out 
                        hover:ring-1 ring-accent3 
                        hover:shadow-xl
                      '
                      quality={75}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const project = projects.find(
    (project: projectsType) => project.id === params.id
  );

  const index = projects.findIndex((object: projectsType) => {
    return object.id === project.id;
  });

  return {
    props: {
      project: project
    }
  };
}
