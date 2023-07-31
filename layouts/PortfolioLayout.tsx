export default function PortfolioLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-screen h-full p-2 md:p-4'>
      <div className='overflow-hidden h-full flex flex-col flex-grow relative bg-primary border-2 border-secondary'>
        <div className='h-full w-full flex-1 overflow-y-auto'>{children}</div>
        <div
          className='
            z-[9999] w-full cursor-pointer
            h-16 flex justify-center items-center
            bg-secondary
            transition-all duration-300
            group
            overflow-visible
          '
        >
          <div
            className='
              w-full h-full font-semibold text-lg text-secondary bg-primary border-t-2 border-secondary
              flex justify-center items-center
              transition-all duration-300
              group-hover:-translate-y-1
            '
          >
            Personal Portfolio
          </div>
        </div>
      </div>
    </div>
  );
}
