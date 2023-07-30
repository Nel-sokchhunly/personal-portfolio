import Image from 'next/image';

import { projectsType } from '../../data/projects';
import MainLayout from '../../layouts/MainLayout';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { projects } from '../../data/projects';
import useViewImage from '../../components/modal/ViewImage';
import { CursorArrowRippleIcon } from '@heroicons/react/24/outline';

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
        <div className='w-full min-h-full p-4 '>
          <div className='flex flex-col lg:flex-row flex-wrap'>
            <div
              className={`
                w-full h-full relative
                max-h-[400px] max-w-[400px]
                flex-shrink-0
                overflow-visible
                mb-4
              `}
            >
              <div
                className='
                  h-full w-full -z-0 bg-black bg-opacity-80 absolute left-0 top-0
                  translate-y-1 -translate-x-1
                  transition duration-300 rounded-sm
                '
              ></div>

              <div
                className='
                  border-2 border-secondary bg-secondary box-border
                  -translate-y-1 translate-x-1
                  rounded-sm overflow-clip z-10 
                  shadow
                '
              >
                <img
                  src={project.poster}
                  alt={project.title}
                  className='object-cover w-full h-full aspect-video'
                />
              </div>
            </div>

            <div className='flex-1 lg:px-4'>
              <div className='flex flex-wrap items-center gap-4'>
                <h1 className='font-bold text-xl text-black text-opacity-90 my-4'>
                  {project.title}
                </h1>
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    className='
                      px-4 p-1 rounded-sm h-fit
                      border-2 border-secondary 
                      flex items-center gap-2
                    '
                  >
                    <CursorArrowRippleIcon
                      className='h-4 w-4 stroke-accent3'
                      aria-hidden='true'
                    />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <p className='whitespace-pre-line '>
                {project.description.trim()}
              </p>
            </div>
          </div>

          {/* project links */}

          {/* technologies */}
          <div className='mt-4 flex flex-wrap gap-4 items-center'>
            <h3 className='font-bold text-lg'>Technologies : </h3>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className={`
                      p-1 px-4 flex space-x-2
                      items-center justify-start
                    `}
                  >
                    {tech.logo && (
                      <img src={tech.logo} alt='' className='h-5' />
                    )}
                    {tech.name && <span>{tech.name}</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* project screenshots */}
          {project.images && project.images.length > 0 && (
            <div>
              <div>
                <h3 className='mt-4 font-bold text-lg'>
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
                        // quality={75}
                        priority
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
                    className='max-w-[400px] max-h-[450px] relative cursor-pointer'
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
                      // quality={75}
                      priority
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

  return {
    props: {
      project: project
    }
  };
}
