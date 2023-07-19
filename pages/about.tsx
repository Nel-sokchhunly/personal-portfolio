import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';

const resumeLink = process.env.RESUME_URL;

export default function About() {
  return (
    <MainLayout>
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
              <div className='text-center border-t-2 border-stone-700 py-4 bg-opacity-50'>
                Nel Sokchhunly
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
          <p className='flex-grow sm:flex-grow-0 sm:w-3/4 '>
            Hello, My name is{' '}
            <span className='font-medium'>Nel Sokchhunly</span>
            <br />
            <br />
            I am a sponsorship student majoring in a Software Engineering major
            at Kirirom Institute of Technology, locating here on top of Kirirom
            mountain.
            <br />
            <br />I am specializing in Frontend web development. I am proficient
            in working with <b>NextJS</b>, <b>ReactJS</b>, <b>TailwindCSS</b>.
            Aside from frontend web development, I also have worked on various
            development aspect such as building mobile application using{' '}
            <b>Flutter</b>, building an internal enterprise application using{' '}
            <b>Odoo</b> technology. I also have experience working with{' '}
            <b>Figma</b>.
          </p>

          <div className='w-full flex flex-col space-y-4 mt-4 mb-10'>
            <a
              href='https://drive.google.com/file/d/1XU4Ms1qe-N8eXH2_i4SFyDFdiF6Z1hWc/view?usp=sharing'
              target='_blank'
              className='cursor-pointer w-fit'
            >
              <div className='flex items-start space-x-2 '>
                <Image
                  src='/assets/cv.png'
                  alt='resume'
                  width='24'
                  height='24'
                />
                <span>View my resume</span>
                <Image
                  src='/assets/open-link.png'
                  alt='open-link'
                  width='14'
                  height='14'
                />
              </div>
            </a>
            <a
              href='mailto:sokchhunlynel@example.com'
              target='_blank'
              className='cursor-pointer w-fit'
            >
              <div className='flex items-start space-x-2'>
                <Image
                  src='/assets/envelope.png'
                  alt='mail'
                  width='24'
                  height='24'
                />
                <span>sokchhunlynel@gmail.com</span>
                <Image
                  src='/assets/open-link.png'
                  alt='open-link'
                  width='14'
                  height='14'
                />
              </div>
            </a>
            <a
              href='https://github.com/Nel-sokchhunly'
              target='_blank'
              className='cursor-pointer w-fit'
            >
              <div className='flex items-start space-x-2'>
                <Image
                  src='/assets/github.png'
                  alt='github'
                  width='24'
                  height='24'
                />
                <span>Nel-sokchhunly</span>
                <Image
                  src='/assets/open-link.png'
                  alt='open-link'
                  width='14'
                  height='14'
                />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/sokchhunly-nel-2926341b9/'
              target='_blank'
              className='cursor-pointer w-fit'
            >
              <div className='flex items-start space-x-2'>
                <Image
                  src='/assets/linkedin.png'
                  alt='linkedin'
                  width='24'
                  height='24'
                />
                <span>Sokchhunly Nel</span>
                <Image
                  src='/assets/open-link.png'
                  alt='open-link'
                  width='14'
                  height='14'
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
