import Link from "next/link";
import { ReactChild } from "react";

type BackNavbarProps = {
  children: Array<ReactChild> | ReactChild;
};

export default function MainLayout({ children }: BackNavbarProps) {
  return (
    <div className="bg-primary flex flex-col relative">
      <div className="min-h-screen px-4 py-8 overflow-y-scroll">{children}</div>
      <div className="bg-primary w-full h-16 flex justify-center items-center border-t-2 border-secondary px-4 sticky bottom-0 right-0">
        <Link href="/">
          <div className="cursor-pointer font-semibold text-lg text-secondary">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
}
