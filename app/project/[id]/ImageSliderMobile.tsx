import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { projectsType } from '../../../data/projects';

export default function ImageSliderMobile({
  project,
  toggle,
  setInitialSlide
}: {
  project: projectsType;
  toggle: () => void;
  setInitialSlide: (number: number) => void;
}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: 'center',
      perView: 'auto',
      spacing: 15
    }
  });

  return (
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
  );
}
