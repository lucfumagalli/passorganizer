"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="w-full flex flex-row justify-between items-center bg-white py-4 px-6">
        <Link href='/' className='flex gap-4 items-center' onClick={() => setToggleDropdown(false)}>
            <Image
                src='/assets/images/logo.svg'
                alt='logo'
                width={70}
                height={70}
                className='object-contain'
            />
            <p className="text-2xl font-extrabold max-sm:hidden">PASSORGANIZER</p>
        </Link>
        {session?.user ? 
          <>
            {/* Desktop nav */}
            <div className="sm:flex hidden items-center gap-5">
                <Link href='/add-password' className="black_btn">
                    Add password
                </Link>
                <button type='button' onClick={signOut} className='outline_btn max-sm:hidden'>
                  Sign Out
                  
                </button>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                />
            </div>
            {/* Mobile nav */}
            <div className="sm:hidden flex items-center gap-5">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                  onClick={() => (setToggleDropdown(!toggleDropdown))}
                />
                {toggleDropdown ? 
                <div className="dropdown">
                  <Link 
                    href='/add-password' 
                    className='dropdown_link_black'
                    onClick={() => setToggleDropdown(false)}
                  >
                    Add password
                  </Link>
                  <button 
                    type='button' 
                    onClick={ () => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className='dropdown_link_black'
                  >
                    Sign Out
                  </button>
                </div>
                : <></>}
            </div>
          </>
          : 
          <>
          </>
        }
    </nav>
  )
}

export default Nav