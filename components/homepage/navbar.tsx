const Title = ({ text, className }: { text: String; className?: String }) => (
  <div className={`font-semibold text-lg text-secondary ${className} px-4`}>
    {text}
  </div>
);

function Navbar() {
  return (
    <div
      className='
          z-10 h-16 w-full flex justify-evenly bg-primary items-center border-t-2 border-secondary
          
        '
    >
      <Title text='Nel Sokchhunly' />
      <div className='border-l-2 border-secondary h-full hidden md:block' />
      <Title text='Portfolio' className='hidden md:block' />
    </div>
  );
}

export default Navbar;
