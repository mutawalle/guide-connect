import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CiHome, CiUser } from "react-icons/ci"
import clsx from "clsx"

type MenuItemProps = {
    type: "home" | "profile" |"explore"
    label: string
}

function MenuItem({ type, label }: MenuItemProps) {
    const [color, setColor] = useState<string>("#64748b")
    const location = useLocation()

    useEffect(() => {
        if(location.pathname=="/"+type){
            setColor("#0284c7")
        }
    }, [])
    return (
        <div className={clsx("w-full p-2 rounded-md flex items-center", color == "#0284c7" && "bg-sky-100", "hover:bg-sky-100")}>
            {
                type == "home" ? <CiHome size={25} color={color}/> : <CiUser size={25} color={color}/>
            }
            <span className={clsx(color == "#64748b" ? "text-slate-500" : "text-sky-600", )}>{label}</span>
        </div>
    )
}

export default MenuItem