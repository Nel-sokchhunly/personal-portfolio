import Link from 'next/link';

type BackNavbarProps = {
  backUrl?: string;
  children: JSX.Element | JSX.Element[];
};

export default function MainLayout({ backUrl, children }: BackNavbarProps) {
  return (
    <div className='overflow-hidden h-screen  bg-primary flex flex-col relative'>
      <div className='h-full flex-grow overflow-y-scroll pb-16'>{children}</div>
      <Link href={backUrl ? backUrl : '/'}>
        <div className='w-full bg-primary cursor-pointer h-16 flex justify-center items-center border-t-2 border-secondary px-4 fixed bottom-0 right-0'>
          <div className='font-semibold text-lg text-secondary'>Back</div>
        </div>
      </Link>
    </div>
  );
}
