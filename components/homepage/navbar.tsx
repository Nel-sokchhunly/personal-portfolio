const Title = ({ text, className }: { text: String; className?: String }) => (
  <div className={`font-semibold text-lg text-secondary ${className}`}>
    {text}
  </div>
);

function Navbar() {
  return (
    <div className="h-16 w-full flex justify-evenly items-center border-b-2 border-secondary">
      <Title text="Nel Sokchhunly" />
      <div className="border-l-2 border-secondary h-full hidden sm:block" />
      <Title text="Personal portfolio " className="hidden sm:block" />
    </div>
  );
}

export default Navbar;
