import Link from "next/link";
import { ReactChild } from "react";

type BackNavbarProps = {
  children: Array<ReactChild> | ReactChild;
};

export default function MainLayout({ children }: BackNavbarProps) {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <div className="w-full h-16 flex justify-center items-center border-b-2 border-secondary px-4">
        <Link href="/">
          <div className="cursor-pointer font-semibold text-lg text-secondary">
            Back
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
}
