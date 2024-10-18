import { useRef, useState, useEffect } from 'react';


import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import EmblaCarousel from './EmblaCarousel';

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

      function onClickEsc() {
        setIsShowing(false)
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
          cursor-pointer p-8
        '
      >
        <div
          className='py-4 px-4 pt-8 relative cursor-default overflow-clip flex flex-col justify-center items-center '
          ref={ref}
        >
          <EmblaCarousel slides={imageList} />
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
