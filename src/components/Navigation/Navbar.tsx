import { useEffect, useState } from 'react';
import AshionLogo from '../../assets/images/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    CartIcon,
    CrossIcon,
    HamburgerMenu,
    HeartIcon,
    SearchIcon,
} from '../../assets/icons/icons';
import CustomBadge from '../common/Badge';

const NavItems = [
    {
        link: 'Home',
        to: '/',
    },
    {
        link: "Women's",
        to: '/women',
    },
    {
        link: "Men's",
        to: '/men',
    },
    {
        link: 'Shop',
        to: '/shop',
    },
    {
        link: 'Blog',
        to: '/blog',
    },
    {
        link: 'Contact',
        to: '/contact',
    },
];

function Navbar() {
    const navigate = useNavigate();
    const [sideMenuBar, setSideMenuBar] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) setSideMenuBar(false);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-between px-[15px] md2:px-[85px] py-[28px] relative">
            <div>
                <a href="/">
                    <img src={AshionLogo} alt="ashion-logo" />
                </a>
            </div>
            <ul className="hidden md2:flex md2:justify-between md:w-[50%] lg:max-w-[500px] xl:max-w-screen-lg">
                {NavItems?.map((item, i) => {
                    return (
                        <li key={i}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `relative uppercase font-medium text-sm tracking-wide pb-1.5 duration-400 ease-in-out transition-all ${
                                        isActive
                                            ? "after:content-[''] after:w-full after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ca1515]"
                                            : "after:hover:animate-animateWidth after:hover:content-[''] after:hover:absolute after:hover:left-0 after:hover:bottom-0 after:hover:h-[2px] after:hover:bg-[#ca1515]"
                                    }`
                                }
                            >
                                {item.link}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <div className="hidden md2:flex md2:items-center">
                <span
                    onClick={handleClick}
                    className="mr-2 cursor-pointer text-[#666666]"
                >
                    Login/Register
                </span>
                <span className="flex justify-between w-[100px]">
                    <SearchIcon className="cursor-pointer text-2xl" />
                    <CustomBadge badgeContent={2}>
                        <HeartIcon className="cursor-pointer text-xl" />
                    </CustomBadge>
                    <CustomBadge badgeContent={4}>
                        <CartIcon className="cursor-pointer text-xl" />
                    </CustomBadge>
                </span>
            </div>
            <span
                onClick={() => setSideMenuBar((prevState) => !prevState)}
                className="cursor-pointer inline-block border-[#000] border-solid border-2 w-[35px] h-[35px] md2:hidden"
            >
                <HamburgerMenu className="text-3xl" />
            </span>

            {/* side menu bar start */}
            <div
                onClick={() => setSideMenuBar(false)}
                className={`${sideMenuBar ? 'translate-x-0' : 'translate-x-[-100%]'} fixed top-0 left-0 w-full h-screen bg-[#00000080]`}
            ></div>
            <div
                className={`z-10 pt-[90px] pr-[20px] pb-[30px] pl-[30px] ${sideMenuBar ? 'translate-x-0' : 'translate-x-[-100%]'} fixed top-0 left-0  w-80 h-screen bg-white transition-all duration-500 ease`}
            >
                <span
                    onClick={() => setSideMenuBar(false)}
                    className="group cursor-pointer hover:bg-[#000] grid place-items-center rounded-[50%] w-[40px] h-[40px] border-2 absolute right-[30px] top-[25px] border-solid border-[#ddd] transition-all duration-500 ease"
                >
                    <CrossIcon className="group-hover:text-white" />
                </span>

                <div className="flex items-center justify-around">
                    <span className="flex justify-between w-[100px]">
                        <SearchIcon className="cursor-pointer text-2xl" />
                        <CustomBadge badgeContent={2}>
                            <HeartIcon className="cursor-pointer text-xl" />
                        </CustomBadge>
                        <CustomBadge badgeContent={4}>
                            <CartIcon className="cursor-pointer text-xl" />
                        </CustomBadge>
                    </span>
                </div>

                <div className="my-[25px]">
                    <a href="/">
                        <img src={AshionLogo} alt="ashion-logo" />
                    </a>
                </div>

                <ul className="flex-col content-between justify-between">
                    {NavItems?.map((item, i) => {
                        return (
                            <li key={i}>
                                <NavLink
                                    to={item.to}
                                    onClick={() => setSideMenuBar(false)}
                                    className={({ isActive }) =>
                                        `${isActive ? 'my-1 rounded-lg bg-black text-white py-[10px] px-5 w-full block' : 'hover:bg-black hover:text-white cursor-pointer my-1 py-[10px] rounded-lg hover:px-5 duration-300 w-full block ease-in-out transition-all'}`
                                    }
                                >
                                    {item.link}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <p className="mt-2 cursor-pointer" onClick={handleClick}>
                    Login/Register
                </p>
            </div>
            {/* side menu bar end */}
        </div>
    );
}

export default Navbar;
