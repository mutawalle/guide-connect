import { useEffect, useState } from 'react'
import ReactFlow, { useNodesState, useEdgesState, Position } from 'reactflow'
import BaseNode from './BaseNode'
import 'reactflow/dist/style.css'
import { AiOutlineComment, AiOutlineLike, AiOutlineMore, AiOutlineSave, AiOutlineSend, AiOutlineShareAlt, AiOutlineSmile } from 'react-icons/ai'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { NodeData } from '../type/Guide'
import CommentItem from './CommentItem'

const initBgColor = '#ffffff'

const connectionLineStyle = { stroke: '#fff' }
const nodeTypes = {
  baseNode: BaseNode
}

const defaultViewport = { x: 0, y: 0, zoom: 1.2 }

const Guide = () => {
  const [nodes, setNodes] = useNodesState<NodeData>([])
  const [edges, setEdges] = useEdgesState([])
  const [name, setName] = useState<string>("Siapa aja")

  useEffect(() => {
    setNodes([
      {
        id: '1',
        type: 'baseNode',
        data: {
          title: "HTML",
          descriptions: ["HTML merupakan ciweud weijd weiu weidwe diew wei", "dwehi wieubdw eiu ewiu ewiur ifuewh diewhihd wieuhiu."],
          learningSources: [{
              label: "Playlist Youtube",
              url: "https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F"
            },
            {
              label: "Dokumentasi",
              url: "https://www.w3schools.com/tags/"
            }
          ],
          images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"],
          minimumCompetences: ["Memahami implementasi tag yang sering digunakan", "Bisa membuat halaman sederhana"]
        },
        position: { x: 10, y: 30 },
        sourcePosition: Position.Left,
        draggable: false
      },
      {
        id: '2',
        type: 'baseNode',
        data: {
          title: "HTML",
          descriptions: ["HTML merupakan ciweud weijd weiu weidwe diew wei", "dwehi wieubdw eiu ewiu ewiur ifuewh diewhihd wieuhiu."],
          learningSources: [{
              label: "Playlist Youtube",
              url: "https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F"
            },
            {
              label: "Dokumentasi",
              url: "https://www.w3schools.com/tags/"
            }
          ],
          images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"],
          minimumCompetences: ["Memahami implementasi tag yang sering digunakan", "Bisa membuat halaman sederhana"]
        },
        position: { x: 180, y: 100 },
        sourcePosition: Position.Left,
        draggable: false
      },
      {
        id: '3',
        type: 'baseNode',
        data: {
          title: "3",
          descriptions: ["ewuhf wiuefw efiuwe"],
          learningSources: [],
          images: [],
          minimumCompetences: []
        },
        position: { x: 180, y: 30 },
        sourcePosition: Position.Left,
        draggable: false
      },
      {
        id: '4',
        type: 'baseNode',
        data: {
          title: "4",
          descriptions: ["ewuhf wiuefw efiuwe"],
          learningSources: [],
          images: [],
          minimumCompetences: []
        },
        position: { x: 280, y: 300 },
        sourcePosition: Position.Left,
        draggable: false
      },
    ]);
    setEdges([
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        sourceHandle: 'c',
        targetHandle: 'e',
        style: { stroke: "#60a5fa", strokeWidth: "20" },
      },
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        sourceHandle: 'c',
        targetHandle: 'e',
        style: { stroke: "#60a5fa", strokeWidth: "20" },
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        sourceHandle: 'c',
        targetHandle: 'f',
        style: { stroke: "#60a5fa", strokeWidth: "20" },
        type: "smoothstep"
      },
    ]);
  }, []);

  return (
    <div className='w-[900px] flex my-4 bg-white rounded-lg border border-slate-300 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.05)] overflow-hidden'>
      <div className=''>
        <div className='p-2 pt-3 pl-3 flex justify-between border-b'>
          <div>
            <span className='block text-700 font-medium leading-3'>Judul Guide</span>
            <span className='block text-sm text-slate-500 leading-5'>by {name}</span>
          </div>
          <div className='flex items-center'>
            <AiOutlineMore style={{ color: "", width: "20px", height: "20px" }} />
          </div>
        </div>
        <div className='w-[500px] h-[500px]'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            style={{ background: initBgColor }}
            nodeTypes={nodeTypes}
            connectionLineStyle={connectionLineStyle}
            defaultViewport={defaultViewport}
            panOnScrollSpeed={0.5}
            panOnDrag={false}
            panOnScroll={false}
            zoomOnDoubleClick={false}
            zoomOnPinch={false}
            zoomOnScroll={false}
          />
        </div>
      </div>
      <div className='w-[400px] border-l'>
        <div className='h-[450px]'>
          <ScrollArea.Root className="w-full h-full">
            <ScrollArea.Viewport className='w-full h-full rounded-lg'>
              <div className='w-full h-full p-4'>
                <CommentItem comment="hwbe dwhbdw ejdbwe diuqbd qiudh q duqw"/>
                <CommentItem comment="hwbe dwhbdw ejdbwe diuqbd qiudh q duqw"/>
                <CommentItem comment="hwbe dwhbdw ejdbwe diuqbd qiudh q duqw"/>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="w-2 mr-1 flex touch-none select-none" orientation="vertical">
              <ScrollArea.Thumb className="grow relative rounded-md bg-slate-300" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="ScrollAreaCorner" />
          </ScrollArea.Root>
        </div>
        <div className='h-full border-t border-slate-200'>
          <div className='flex justify-between p-2'>
            <div className='flex'>
              <AiOutlineLike style={{ width: "24px", height: "24px" }} />
              <AiOutlineComment style={{ width: "24px", height: "24px", marginLeft: "4px" }} />
              <AiOutlineShareAlt style={{ width: "24px", height: "24px", marginLeft: "4px" }} />
            </div>
            <AiOutlineSave style={{ width: "24px", height: "24px" }} />
          </div>
          <div>
            <div className='flex p-3 mt-3'>
              <AiOutlineSmile style={{ width: "24px", height: "24px" }} />
              <input className='mx-2 w-full outline-none' type='text' placeholder='Add Comment' />
              <AiOutlineSend style={{ width: "24px", height: "24px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
