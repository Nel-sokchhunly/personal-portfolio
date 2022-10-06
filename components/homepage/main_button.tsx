import Link from "next/link";

type MainButtonProps = {
  title: String;
  color: String;
  page: String;
};

function MainButton({ title, color, page }: MainButtonProps) {
  return (
    <div className="h-64 w-52 xl:w-56 border-2 border-secondary flex flex-col hover:shadow-md hover:shadow-secondary transition duration-200">
      <div
        className={`flex-1 w-full flex items-center justify-center ${color} bg-opacity-30 font-medium whitespace-pre-wrap`}
      >
        {title}
      </div>
      <Link href={"/" + page}>
        <button
          typeof="button"
          className={`flex justify-center border-t-2 border-black py-4 cursor-pointer ${color} bg-opacity-50 hover:bg-primary focus:bg-primary  `}
        >
          <img src="assets/enter.png" alt="enter button" className='h-6' />
        </button>
      </Link>
    </div>
  );
}

export default MainButton;
