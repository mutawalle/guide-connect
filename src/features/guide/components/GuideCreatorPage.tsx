import Sidebar from "@/components/Sidebar"
import GuideCreator from "./GuideCreator"

function GuideCreatorPage() {
  return (
    <div className="flex bg-slate-50">
      <Sidebar />
      <div className="w-full flex justify-center items-center">
        <GuideCreator/>
      </div>
    </div>
  )
}

export default GuideCreatorPage