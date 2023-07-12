import Sidebar from "@/components/Sidebar"
import GuideCreator from "./GuideCreator"
import { ReactFlowProvider } from "reactflow"

function GuideCreatorPage() {
  return (
    <div className="flex bg-slate-50">
      <Sidebar />
      <div className="w-full flex justify-center items-center">
        <ReactFlowProvider>
          <GuideCreator/>
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default GuideCreatorPage