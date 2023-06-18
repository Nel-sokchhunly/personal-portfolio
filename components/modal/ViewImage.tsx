import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';

export default function useViewImage({ imageList }: { imageList: string[] }) {
  const [isShowing, setIsShowing] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function ViewImageModal() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
      initial: initialSlide,
      slides: {
        spacing: 15
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setCurrentSlide(initialSlide);
        setLoaded(true);
      }
    });

    const ref = useRef(null);

    // useEffect for clicked outside ref element
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShowing(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);

    const isLastSlide = () =>
      currentSlide === instanceRef.current.track.details.slides.length - 1;

    return isShowing ? (
      <motion.div
        key={'view-image'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 1
          }
        }}
        className='
          w-screen h-full overflow-hidden 
          bg-black bg-opacity-20 z-[999999]
          fixed top-0 left-0
          flex justify-center items-center
          filter backdrop-blur-sm
          cursor-pointer
        '
      >
        <div
          className='py-4 px-4 pt-8 w-fit h-full relative cursor-default overflow-clip flex flex-col flex-grow '
          ref={ref}
        >
          <div ref={sliderRef} className='keen-slider h-full'>
            {imageList.map((image, index) => (
              <div key={index} className='keen-slider__slide relative'>
                <div
                  className='cursor-pointer absolute w-full h-full'
                  onClick={toggle}
                ></div>
                <Image
                  src={image}
                  alt='project image'
                  fill
                  className='object-scale-down mx-auto z-10'
                  style={{
                    maxWidth: 'fit-content',
                    maxHeight: 'fit-content',
                    height: '100%',
                    width: '100%'
                  }}
                  quality={100}
                  priority
                />
              </div>
            ))}
          </div>

          <div className='w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto flex justify-between px-8 items-center gap-4 mt-8 mb-4'>
            {loaded && (
              <>
                <button
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  className={[
                    `
                      rounded-full
                      transform transition-all duration-200
                    `,
                    currentSlide !== 0 && 'hover:scale-110'
                  ].join(' ')}
                  disabled={currentSlide === 0}
                >
                  <img
                    className={`h-12 w-12 rotate-180 ${
                      currentSlide === 0 && 'opacity-40'
                    }`}
                    src='/assets/arrow.png'
                  />
                </button>

                <button
                  onClick={toggle}
                  className='
                    p-2 px-8 text-xl font-bold text-white bg-black bg-opacity-20 rounded-full
                    hover:bg-opacity-50 hover:px-20 hover:bg-accent3
                    border-2 border-black border-opacity-0 hover:border-opacity-20
                    transform transition-all duration-200
                  '
                >
                  Close
                </button>

                <button
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  className={[
                    `
                      rounded-full
                      transform transition-all duration-200
                    `,
                    !isLastSlide() && 'hover:scale-110'
                  ].join(' ')}
                  disabled={isLastSlide()}
                >
                  <img
                    className={`h-12 w-12 ${isLastSlide() && 'opacity-40'}`}
                    src='/assets/arrow.png'
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    ) : (
      <></>
    );
  }

  return {
    toggle,
    ViewImageModal,
    setInitialSlide
  };
}
