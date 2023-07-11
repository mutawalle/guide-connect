import Sidebar from "@/components/Sidebar"
import ListGuide from "../guide/components/ListGuide"

function Home() {
  return (
    <div className="flex bg-slate-50">
      <Sidebar />
      <ListGuide/>
    </div>
  )
}

export default Home