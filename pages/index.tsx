import MainButton from '../components/homepage/main_button';
import Navbar from '../components/homepage/navbar';

function Homepage() {
  return (
    <div className='h-screen w-full overflow-hidden bg-primary flex flex-col relative'>
      <div
        className='
          mb-32 md:mb-16
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
