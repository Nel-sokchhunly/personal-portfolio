import Link from 'next/link';
import { ReactChild } from 'react';

type BackNavbarProps = {
  children: Array<ReactChild> | ReactChild;
};

export default function MainLayout({ children }: BackNavbarProps) {
  return (
    <div className='min-h-screen bg-primary flex flex-col relative'>
      <div className='h-full flex-grow px-4 py-10 overflow-y-scroll'>
        {children}
      </div>
      <Link href='/'>
        <div className='bg-primary cursor-pointer h-16 flex justify-center items-center border-t-2 border-secondary px-4 sticky bottom-0 right-0'>
          <div className='font-semibold text-lg text-secondary'>Back</div>
        </div>
      </Link>
    </div>
  );
}
