import Sidebar from "@/components/Sidebar"
import Post from "../post/Post"
import ListPost from "../post/ListPost"

function Home() {
  return (
    <div className="flex bg-slate-50">
      <Sidebar />
      <ListPost/>
    </div>
  )
}

export default Home