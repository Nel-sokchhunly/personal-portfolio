import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';

const resumeLink = process.env.RESUME_URL;

export default function About() {
  return (
    <MainLayout>
      <div className='h-full flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 px-4 py-10 '>
        <div className='flex justify-center sm:justify-start'>
          <div className='h-72 w-52 xl:w-56 border-2 border-secondary flex flex-col hover:shadow-sm hover:shadow-secondary transition duration-200'>
            <div className='relative flex-1 w-full flex items-center justify-center bg-opacity-30 font-medium whitespace-pre-wrap'>
              <Image
                src='/assets/profile.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='text-center border-t-2 border-black py-4 bg-opacity-50 hover:bg-primary focus:bg-primary'>
              Nel Sokchhunly
            </div>
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

          <div className='w-full flex flex-col space-y-4 mt-4'>
            <a href={resumeLink}>
              <div className='flex items-start space-x-2'>
                <Image
                  src='/assets/cv.png'
                  alt='resume'
                  width='24'
                  height='24'
                />
                <span>View my resume</span>
              </div>
            </a>
            <a href='mailto:sokchhunlynel@example.com'>
              <div className='flex items-start space-x-2'>
                <Image
                  src='/assets/envelope.png'
                  alt='mail'
                  width='24'
                  height='24'
                />
                <span>sokchhunlynel@gmail.com</span>
              </div>
            </a>
            <div className='flex items-start space-x-2'>
              <Image
                src='/assets/phone.png'
                alt='mail'
                width='24'
                height='24'
              />
              <span>+855 96 53 61 563</span>
            </div>
            <a href='https://github.com/Nel-sokchhunly'>
              <div className='flex items-start space-x-2'>
                <Image
                  src='/assets/github.png'
                  alt='github'
                  width='24'
                  height='24'
                />
                <span>Nel-sokchhunly</span>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/sokchhunly-nel-2926341b9/'>
              <div className='flex items-start space-x-2 mb-10'>
                <Image
                  src='/assets/linkedin.png'
                  alt='linkedin'
                  width='24'
                  height='24'
                />
                <span>Sokchhunly Nel</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
