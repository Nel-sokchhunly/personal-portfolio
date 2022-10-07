import Link from 'next/link';

type BackNavbarProps = {
  children: JSX.Element | JSX.Element[];
};

export default function MainLayout({ children }: BackNavbarProps) {
  return (
    <div className='overflow-hidden h-screen bg-primary flex flex-col relative'>
      <div className='h-full flex-grow overflow-y-scroll'>{children}</div>
      <Link href='/'>
        <div className='bg-primary cursor-pointer h-16 flex justify-center items-center border-t-2 border-secondary px-4 sticky bottom-0 right-0'>
          <div className='font-semibold text-lg text-secondary'>Back</div>
        </div>
      </Link>
    </div>
  );
}
