import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Services',
    path: '/services',
  },
  {
    id: 4,
    name: 'Blog',
    path: '/blog',
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact',
  },
];
const Navbar = () => {

  const [open, setOpen] = useState(false)
  const linkList = navLinks.map(route => (
    <Links key={route.id} route={route}></Links>
  ));

  return (
    <nav className="flex justify-between mt-4 mx-10 text-2xl">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`
            md:hidden 
            absolute ${open ? 'top-8' : '-top-40' }
            duration-1000
            z-50
           bg-amber-200 text-black`}
        >
          {linkList}
        </ul>
        <h2 className="ml-3">My Navbar</h2>
      </span>

      {/* Another dynamic way to set url  */}
      {/* <ul className='flex text-3xl'>
        {
          navLinks.map(link => <Links link={link}></Links>)
        }
      </ul> */}

      <ul className="md:flex hidden">{linkList}</ul>

      {/* Dynamic url use Example */}
      {/* <ul className="flex">
        {navLinks.map(links => (
          <li key={links.id} className="mr-8 text-3xl">
            <a href={links.path}>{links.name}</a>
          </li>
        ))}
      </ul> */}

      {/* fixed url example */}
      {/* <ul className='flex g'>
        <li className='mr-8 text-3xl'><a href="/home">Home</a></li>
        <li className='mr-8 text-3xl'><a href="/about">About</a></li>
        <li className='mr-8 text-3xl'><a href="/blogs">Blogs</a></li>
      </ul> */}

      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;