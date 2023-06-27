import React, { useState,useEffect,useRef } from 'react'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLBaseElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !buttonRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      console.log('click outside');
      console.log(isOpen)
    }else if(buttonRef.current){
        console.log('click inside');
        console.log(isOpen)
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
        <button ref={buttonRef} id="sidebarbutton" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleSidebar}>
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <aside ref={sidebarRef} id="sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ${
          isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 `} aria-label="Sidebar">
            <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center pl-2.5 my-8">
                <div className="bg-black dark:bg-white w-6 h-6 mr-3 sm:h-7 rounded-full"></div>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">blabla</span>
                </div>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="bg-black dark:bg-white w-6 h-6 rounded-full"></div>
                        <span className="ml-3">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="bg-black dark:bg-white w-6 h-6 rounded-full"></div>
                        <span className="flex-1 ml-3 whitespace-nowrap">Explore</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="bg-black dark:bg-white w-6 h-6 rounded-full"></div>
                        <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                        </a>
                    </li>
                </ul>
                <div className="pt-4 mt-4 font-medium border-t border-gray-200 dark:border-gray-700">
                    <p className="flex mb-2 items-center p-2 text-gray-900 dark:text-white group">
                        <span className="ml-4 font-semibold">My Progress</span>
                    </p>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <div className="bg-black dark:bg-white w-6 h-6 rounded-full"></div>
                            <span className="ml-3">Documentation</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <div className="bg-black dark:bg-white w-6 h-6 rounded-full"></div>
                            <span className="ml-3">Components</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <div className="bg-black dark:bg-white w-6 h-6 rounded-full"></div>
                            <span className="ml-3">Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <span className="flex-grow"></span>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="bg-black dark:bg-white w-6 h-6 rounded-full"></div>
                    <span className="ml-3">Create Post</span>
                </a>
            </div>
        </aside>
    </>
  )
}

export default Sidebar