import { useEffect } from 'react'
import ReactFlow, { useNodesState, useEdgesState, Position } from 'reactflow'
import BaseNode from './BaseNode'
import 'reactflow/dist/style.css'
import Profile from '@/components/Profile'
import { AiOutlineComment, AiOutlineLike, AiOutlineMore, AiOutlineSave, AiOutlineSend, AiOutlineShareAlt, AiOutlineSmile } from 'react-icons/ai'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { NodeData } from '../type/Guide'

const initBgColor = '#ffffff'

const connectionLineStyle = { stroke: '#fff' }
const nodeTypes = {
  baseNode: BaseNode
}

const defaultViewport = { x: 0, y: 0, zoom: 1.2 }

const Guide = () => {
  const [nodes, setNodes] = useNodesState<NodeData>([])
  const [edges, setEdges] = useEdgesState([])

  useEffect(() => {
    setNodes([
      {
        id: '1',
        type: 'baseNode',
        data: {
          title: "1",
          description: ["ewuhf wiuefw efiuwe"],
          learningSources: [],
          images: [],
          minimumCompetences: []
        },
        position: { x: 10, y: 30 },
        sourcePosition: Position.Left,
        draggable: false
      },
      {
        id: '2',
        type: 'baseNode',
        data: {
          title: "2",
          description: ["ewuhf wiuefw efiuwe"],
          learningSources: [],
          images: [],
          minimumCompetences: []
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
          description: ["ewuhf wiuefw efiuwe"],
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
          description: ["ewuhf wiuefw efiuwe"],
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
        style: { stroke: "#60a5fa", strokeWidth: "20" },
      },
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        style: { stroke: "#60a5fa", strokeWidth: "20" },
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        style: { stroke: "#60a5fa", strokeWidth: "20" },
        targetHandle: 'b',
        type: 'smoothstep'
      },
    ]);
  }, []);

  return (
    <div className='w-[900px] flex my-4 bg-white rounded-lg border border-slate-300 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.05)] overflow-hidden'>
      <div className=''>
        <div className='p-2 flex justify-between border-b'>
          <Profile name="Paijo" desc="hjew fiweuf ewiubfew" />
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
                <div>ckehrwfir</div>
                <div>ckehrwfir</div>
                <div>ckehrwfir</div>
                <div>ckehrwfir</div>
                <div>ckehrwfir</div>
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
