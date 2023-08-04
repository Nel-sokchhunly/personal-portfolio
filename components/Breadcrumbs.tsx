import { useRouter } from 'next/router';
import Link from 'next/link';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '../utils';

type Crumb = {
  name: string;
  url: string;
};

export default function Breadcrumbs() {
  const router = useRouter();

  const [links, setLinks] = useState<Crumb[]>();

  useEffect(() => {
    const pathname = router.asPath;
    const path = pathname.split('/');

    let crumbs: Crumb[] = [];

    if (pathname === '/') {
      crumbs = [
        {
          name: 'Home',
          url: '/'
        }
      ];
    } else {
      crumbs = path.map((crumb, index) => {
        if (index === 0) {
          return {
            name: 'Home',
            url: '/'
          };
        } else {
          return {
            name: crumb.charAt(0).toUpperCase() + crumb.slice(1),
            url: path.slice(0, index + 1).join('/')
          };
        }
      });
    }

    console.log(crumbs);
    setLinks(crumbs);
  }, [router.pathname]);

  return (
    <div
      className='
        static left-0 top-0 ml-2 p-2 flex items-center flex-nowrap space-x-2
        w-full bg-primary z-10
      '
    >
      {links?.map((link, index) => {
        return (
          <Crumb
            key={index}
            name={link.name}
            url={link.url}
            disabled={index === links.length - 1}
            isLast={index === links.length - 1}
          />
        );
      })}
    </div>
  );
}

const Dot = () => {
  return (
    <div
      className='
        w-2 h-2 rounded-full
        bg-secondary inline-block
      '
    />
  );
};

const Crumb = ({
  name,
  url,
  isLast,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  Crumb & {
    isLast?: boolean;
  }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <div className='flex items-center justify-start space-x-2 '>
      <button
        {...props}
        onClick={handleClick}
        className={`
            text-secondary font-semibold    
            transition-all duration-300
            flex flex-col flex-nowrap
            group relative
          `}
      >
        {name}
        {!isLast && (
          <div
            className='
              absolute top-full left-0
              h-[2px] w-full bg-black rounded-full scale-x-0 group-hover:scale-x-100 origin-left
              transition-all duration-300
            '
          />
        )}
      </button>
      {!isLast && <ChevronRightIcon className='w-4 h-4' />}
    </div>
  );
};
