type ProfileProps = {
    name: string,
    urlImage?: string,
    desc?: string 
}


function Profile({name, urlImage, desc}: ProfileProps) {
  return (
    <div className="flex items-center">
        <div className="w-10 h-10 bg-sky-200 rounded-full">
        </div>
        <div className="ml-2">
            <h4 className="text-sm font-semibold leading-3">{name}</h4>
            <p className="text-sm text-slate-500 leading-5">{desc}</p>
        </div>
    </div>
  )
}

export default Profile