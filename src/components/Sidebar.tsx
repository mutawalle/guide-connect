const Sidebar = () => {
  return (
    <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
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
  )
}

export default Sidebar