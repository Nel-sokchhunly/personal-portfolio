import Image from 'next/image';

export default function Socials() {
  return (
    <div className='w-full flex flex-col space-y-4 mt-4 mb-10'>
      <a
        href='https://drive.google.com/file/d/1XU4Ms1qe-N8eXH2_i4SFyDFdiF6Z1hWc/view?usp=sharing'
        target='_blank'
        className='cursor-pointer w-fit'
      >
        <div className='flex items-start space-x-2 '>
          <Image src='/assets/cv.png' alt='resume' width='24' height='24' />
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
          <Image src='/assets/envelope.png' alt='mail' width='24' height='24' />
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
          <Image src='/assets/github.png' alt='github' width='24' height='24' />
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
  );
}
