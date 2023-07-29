import Link from 'next/link';

type BackNavbarProps = {
  backUrl?: string;
  children: JSX.Element | JSX.Element[];
};

export default function MainLayout({ backUrl, children }: BackNavbarProps) {
  return (
    <div className='w-screen h-full p-2 md:p-4'>
      <div className='overflow-hidden h-full flex flex-col flex-grow relative bg-primary border-2 border-secondary'>
        <div className='h-full w-full flex-1 overflow-y-auto'>{children}</div>
        <Link
          href={backUrl ? backUrl : '/'}
          className='z-[9999] w-full bg-primary cursor-pointer h-16 flex justify-center items-center border-t-2 border-secondary px-4 '
        >
          <div className='font-semibold text-lg text-secondary'>Back</div>
        </Link>
      </div>
    </div>
  );
}
