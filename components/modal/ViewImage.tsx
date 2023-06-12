import { useRef, useState, useEffect } from 'react';

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
        console.log('====================================');
        console.log(slider.track.details.rel);
        console.log('====================================');
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
          w-screen h-screen overflow-hidden 
          bg-transparent z-[999999]
          absolute top-0 left-0
          flex justify-center items-center
          bg-black bg-opacity-20 filter backdrop-blur-sm
          p-24 py-4 xl:py-8 cursor-pointer
        '
      >
        <div
          className='bg-white rounded-xl p-4 w-full h-full relative cursor-default overflow-clip'
          ref={ref}
        >
          <div ref={sliderRef} className='keen-slider w-full h-full p-4'>
            {imageList.map((image, index) => (
              <div key={index} className='keen-slider__slide w-full'>
                <img
                  src={image}
                  className='h-full w-full full object-scale-down aspect-auto'
                />
              </div>
            ))}
          </div>

          {loaded && (
            <>
              {currentSlide !== 0 && (
                <button
                  className='
                    absolute left-4 top-0 h-full flex justify-center items-center
                    hover:bg-gradient-to-r hover:from-slate-200 hover:to-transparent
                    -mx-4 px-4
                  '
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                >
                  <img className='h-8 w-8 rotate-90' src='/assets/arrow.png' />
                </button>
              )}
              {currentSlide !==
                instanceRef.current.track.details.slides.length - 1 && (
                <button
                  className='
                    absolute right-4 top-0 h-full flex justify-center items-center
                    hover:bg-gradient-to-l hover:from-slate-200 hover:to-transparent
                    -mx-4 px-4
                  '
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                >
                  <img className='h-8 w-8 -rotate-90' src='/assets/arrow.png' />
                </button>
              )}
            </>
          )}
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
