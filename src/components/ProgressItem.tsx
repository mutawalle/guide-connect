type ProgressItemProps = {
    label: string,
    percentage: number
}

function ProgressItem({label, percentage}: ProgressItemProps) {
  return (
    <div>
        <span className="block text-md text-slate-600">{label}</span>
        <div className="w-full rounded-md h-2 bg-slate-200">
            <div className="bg-sky-500 rounded-md h-2" style={{
                width: `${percentage}%`
            }}></div>
        </div>
        <span className="block w-full text-slate-400 text-sm text-end">{`${percentage}%`}</span>
    </div>
  )
}

export default ProgressItem