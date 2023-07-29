'use client';

import Image from 'next/image';

import { projectsType } from '../../../data/projects';
import MainLayout from '../../../layouts/MainLayout';

import 'keen-slider/keen-slider.min.css';

import { projects } from '../../../data/projects';
import useViewImage from '../../../components/modal/ViewImage';
import ImageSliderMobile from './ImageSliderMobile';

export default function Project({ params }: { params: any }) {
  const project = projects.find(
    (project: projectsType) => project.id === params.id
  );

  const { toggle, ViewImageModal, setInitialSlide } = useViewImage({
    imageList: project.images
  });

  return (
    <>
      <ViewImageModal />

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

            <p className='whitespace-pre-line '>{project.description.trim()}</p>
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
                <div
                  key={index}
                  className={`p-2 px-4 ${color} rounded-full text-white flex space-x-2
                 
                    `}
                >
                  {tech.logo && <img src={tech.logo} alt='' className='h-6' />}
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
              <h3 className='mt-8 font-bold text-lg'>Project Screenshots : </h3>
              <span className='text-black text-opacity-50 text-xs font-medium'>
                (click to view bigger image)
              </span>
            </div>

            {/* images slider for mobile */}
            <ImageSliderMobile
              project={project}
              toggle={toggle}
              setInitialSlide={setInitialSlide}
            />

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
    </>
  );
}