import React from 'react';
import Links from './Links';

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
  return (
    <nav>


      {/* Another dynamic way to set url  */}
      {/* <ul className='flex text-3xl'>
        {
          navLinks.map(link => <Links link={link}></Links>)
        }
      </ul> */}

      <ul className='flex text-2xl'>
        {
          navLinks.map(route => <Links route={route}></Links>)
        }
      </ul>





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
    </nav>
  );
};

export default Navbar;