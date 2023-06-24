import { useEffect } from 'react';
import MainButton from '../components/homepage/main_button';
import Navbar from '../components/homepage/navbar';
import { useRouter } from 'next/router';

function Homepage() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/project');
    router.prefetch('/about');
  }, []);

  return (
    <div className='min-h-full w-screen overflow-hidden bg-primary flex flex-col relative'>
      <div
        className='
          mb-16 
          gap-4 md:space-y-0 
          min-h-full w-full 
          flex-1 flex flex-col flex-grow md:flex-row justify-evenly items-center
        '
      >
        <MainButton title='Project' color='bg-accent1' page='project' />
        <MainButton title='About' color='bg-accent3' page='about' />
      </div>

      <Navbar />
    </div>
  );
}

export default Homepage;
