import Image from 'next/image';
import PortfolioLayout from '../layouts/PortfolioLayout';

import { Lora } from 'next/font/google';

const lora = Lora({
  display: 'swap',
  subsets: ['latin']
});

export default function Portfolio() {
  return (
    <PortfolioLayout>
      <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 px-5 md:px-10 py-10 '>
        <div className='flex justify-center sm:justify-start mr-2 mb-2'>
          <div className='relative group h-72 w-52 xl:w-56 '>
            <div
              className='
                -translate-y-1 translate-x-1
                z-[1] absolute left-0 top-0
                w-full h-full border-2 border-secondary flex flex-col 
                transition duration-300
                bg-white rounded-sm 
              '
            >
              <div className='relative flex-1 w-full flex items-center justify-center bg-opacity-30 font-medium whitespace-pre-wrap'>
                <Image
                  src='/assets/nel-sokchhunly.jpeg'
                  alt='profile'
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div
              className='
          h-full w-full z-0 bg-black bg-opacity-80 absolute left-0 top-0
          translate-y-1 -translate-x-1
          transition duration-300 rounded-sm
        '
            ></div>
          </div>
        </div>
        <div>
          <p className='flex-grow sm:flex-grow-0 lg:w-3/4'>
            Hello there, My name is
            <br />
            <span className='font-medium text-xl' style={lora.style}>
              Nel Sokchhunly
            </span>
            <br />
            <br />I am a <b>Software Engineer</b> specializing in{' '}
            <b>Frontend web development</b>. I am proficient in working with{' '}
            <b>NextJS</b>, <b>ReactJS</b>, <b>TailwindCSS</b>. Aside from
            frontend web development, I also have worked on various development
            aspect such as building mobile application using <b>Flutter</b>,
            building an internal enterprise application using <b>Odoo</b>{' '}
            technology. I also have experience working with <b>Figma</b>.
          </p>
        </div>
      </div>
    </PortfolioLayout>
  );
}
