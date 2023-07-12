import clsx from "clsx"

type ProfileProps = {
    name?: string,
    urlImage?: string,
    desc?: string,
    className?: string
}


function Profile({name, urlImage, desc, className}: ProfileProps) {
  return (
    <div className={clsx(className,"flex items-center")}>
        <div className="w-9 h-9 bg-sky-200 rounded-full">
        </div>
        {
          name &&
          <div className="ml-2">
              <h4 className="text-sm font-semibold leading-3">{name}</h4>
              <p className="text-sm text-slate-500 leading-5">{desc}</p>
          </div>
        }
    </div>
  )
}

export default Profile