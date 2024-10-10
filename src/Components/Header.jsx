import { useState } from 'react';
import SearchBar from "./SearchBar";
import Settings from "./Setting";
import logoo from "../assets/icons/logo.png";

const Header = ({ setPlace, unit, setUnit }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black bg-opacity-70 border-b border-gray-200 dark:bg-blue-800 fixed w-full z-10 shadow-lg">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        
                <a href="/" className="flex items-center space-x-3">
                    <img src={logoo} className="h-12 md:h-14" alt="Flowbite Logo" />
                    <span className="text-lg md:text-2xl font-semibold text-white">Propacity</span>
                </a>

                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>

                <div className="hidden md:flex items-center space-x-4">
                    <SearchBar setplace={setPlace} />
                    <Settings unit={unit} setunit={setUnit} />
                </div>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-black bg-opacity-90 border-t border-gray-700 dark:bg-blue-900 w-11/12 max-w-xs mx-auto p-4 rounded-lg space-y-4`}>
                <div className="border-b border-gray-600 pb-4">
                    <SearchBar setplace={setPlace} />
                </div>
                
                <div className="pt-4 flex justify-center">
                    <Settings unit={unit} setunit={setUnit} />
                </div>
            </div>
        </nav>
    );
};

export default Header;
