import Link from 'next/link';

type MainButtonProps = {
  title: String;
  color: String;
  page: String;
};

import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

function MainButton({ title, color, page }: MainButtonProps) {
  return (
    <Link href={'/' + page}>
      <div
        className='
          relative group
          h-52 w-48 md:h-64 md:w-52 xl:w-56
          rounded-sm 
        '
      >
        <div
          className='
            w-full h-full flex flex-col transition duration-300
            group-hover:-translate-y-1 group-hover:translate-x-1
            border-2 border-stone-700 
            absolute left-0 top-0 
            bg-white rounded-sm
            z-10
          '
        >
          <div
            className={`
            flex-1 w-full flex items-center justify-center ${color} bg-opacity-30 font-medium whitespace-pre-wrap
            `}
          >
            <span className='font-semibold'>{title}</span>
          </div>
          {/* <button
            typeof='button'
            className={`
              w-full flex justify-center items-center border-t-2 border-black py-2 md:py-4 cursor-pointer ${color} bg-opacity-50 
              font-medium 
            `}
          >
            <ArrowsPointingOutIcon className='h-5 w-5 mr-2' />
            <span>Open</span>
          </button> */}
        </div>

        <div
          className='
              h-full w-full z-0 bg-black bg-opacity-80 absolute left-0 top-0
              group-hover:translate-y-1 group-hover:-translate-x-1
              transition duration-300 rounded-sm
            '
        ></div>
      </div>
    </Link>
  );
}

export default MainButton;
