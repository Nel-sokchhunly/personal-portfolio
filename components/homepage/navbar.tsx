const Title = ({ text, className }: { text: String; className?: String }) => (
  <div className={`font-semibold text-lg text-secondary ${className}`}>
    {text}
  </div>
);

function Navbar() {
  return (
    <div className='fixed bottom-0 left-0 h-16 w-full flex justify-evenly bg-primary items-center border-t-2 border-secondary'>
      <Title text='Nel Sokchhunly' />
      <div className='border-l-2 border-secondary h-full hidden md:block' />
      <Title text='Personal portfolio ' className='hidden md:block' />
    </div>
  );
}

export default Navbar;
