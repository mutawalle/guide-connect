import Logo from "@/assets/Logo"
import { BsSearch } from "react-icons/bs"
import MenuItem from "./MenuItem"
import ProgressItem from "./ProgressItem"
import { FcLandscape } from 'react-icons/fc'
import DialogDemo from "./Dialog"

const Sidebar = () => {
    return (
        <aside id="sidebar" className={`w-80 border-r h-screen shadow-[0px_0px_8px_1px_rgba(0,0,0,0.05)] border-slate-300`} aria-label="Sidebar">
            <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-white dark:bg-slate-800">
                <div className="flex items-center pl-2.5 my-8">
                    <Logo/>
                    <span className="ml-2 self-center text-xl text-sky-600 font-semibold whitespace-nowrap dark:text-white">Guide Connect</span>
                </div>
                <div className="flex px-3 py-2 mb-2 items-center border-[1px] rounded-md border-slate-300">
                    <BsSearch className="mr-2" size={20} fill="#64748b"/>
                    <input className="w-full text-slate-700 outline-none" placeholder="Find guide..."/>
                </div>
                <ul className="space-y-2">
                    <li>
                        <a href="/home">
                            <MenuItem type="home" label="Home"/>
                        </a>
                    </li>
                    <li>
                        <a href="/profile">
                            <MenuItem type="profile" label="Profile"/>
                        </a>
                    </li>
                </ul>
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="flex mb-2 items-center text-gray-900 dark:text-white group">
                        <span className="font-semibold text-slate-700">My Progress</span>
                    </p>
                    <ul className="space-y-2">
                        <li>
                            <ProgressItem label="Web Development" percentage={80}/>
                        </li>
                        <li>
                            <ProgressItem label="Learn Digital Marketing" percentage={20}/>
                        </li>
                        <li>
                            <ProgressItem label="Investment Roadmap" percentage={70}/>
                        </li>
                        <li>
                            <DialogDemo/>
                        </li>
                    </ul>
                </div>
                <span className="flex-grow"></span>
                <a href="/create-guide" className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-xl">
                    <div className="flex w-12 h-12 items-center justify-center bg-white rounded-md shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                        <FcLandscape size={30}/>
                    </div>
                    <span className="ml-3 text-slate-600">Create Post</span>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar