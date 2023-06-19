import Link from 'next/link';

type BackNavbarProps = {
  backUrl?: string;
  children: JSX.Element | JSX.Element[];
};

export default function MainLayout({ backUrl, children }: BackNavbarProps) {
  return (
    <div className='overflow-hidden h-full flex flex-col flex-grow relative bg-primary'>
      <div className='min-h-full w-screen flex-1 overflow-y-auto'>
        {children}
        {/* compensate for bottom bar height */}
        <div className='h-16 w-full'></div>
      </div>
      <Link href={backUrl ? backUrl : '/'}>
        <div className='w-full bg-primary cursor-pointer h-16 flex justify-center items-center border-t-2 border-secondary px-4 fixed bottom-0 right-0'>
          <div className='font-semibold text-lg text-secondary'>Back</div>
        </div>
      </Link>
    </div>
  );
}
