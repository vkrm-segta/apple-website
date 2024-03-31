import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='w-full flex justify-between items-center py-5 sm:px-10 px-5'>
      <nav className='w-full flex screen-max-width'>
        <img src={appleImg} width={14} height={18} alt='apple' />

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              className='text-sm text-gray hover:text-white cursor-pointer transition-all px-5'
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} width={18} height={18} alt='search' />
          <img src={bagImg} width={18} height={18} alt='bag' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
