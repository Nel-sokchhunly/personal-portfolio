import Link from 'next/link';

type MainButtonProps = {
  title: String;
  color: String;
  page: String;
};

function MainButton({ title, color, page }: MainButtonProps) {
  return (
    <Link href={'/' + page}>
      <div className='h-52 w-48 md:h-64 md:w-52 xl:w-56 border-2 border-secondary flex flex-col hover:shadow-md hover:shadow-secondary transition duration-200'>
        <div
          className={`flex-1 w-full flex items-center justify-center ${color} bg-opacity-30 font-medium whitespace-pre-wrap`}
        >
          {title}
        </div>
        <button
          typeof='button'
          className={`w-full flex justify-center border-t-2 border-black py-2 md:py-4 cursor-pointer ${color} bg-opacity-50 hover:bg-primary focus:bg-primary  `}
        >
          <img src='assets/enter.png' alt='enter button' className='h-6' />
        </button>
      </div>
    </Link>
  );
}

export default MainButton;
