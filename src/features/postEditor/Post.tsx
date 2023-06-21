import { useEffect } from 'react'
import ReactFlow, { useNodesState, useEdgesState, Position } from 'reactflow'
import BaseNode from './BaseNode'
import 'reactflow/dist/style.css'

const initBgColor = '#ffffff'

const connectionLineStyle = { stroke: '#fff' }
const nodeTypes = {
  baseNode: BaseNode
}

const defaultViewport = { x: 0, y: 0, zoom: 1 }

const CustomNodeFlow = () => {
  const [nodes, setNodes] = useNodesState([])
  const [edges, setEdges] = useEdgesState([])

  useEffect(() => {
    setNodes([
      {
        id: '1',
        type: 'baseNode',
        data: {},
        position: { x: 10, y: 30 },
        sourcePosition: Position.Left,
        draggable: false
      },
      {
        id: '2',
        type: 'baseNode',
        data: {},
        position: { x: 180, y: 100 },
        sourcePosition: Position.Left,
        draggable: false
      },
      {
        id: '3',
        type: 'baseNode',
        data: {},
        position: { x: 180, y: 30 },
        sourcePosition: Position.Left,
        draggable: false
      },
      {
        id: '4',
        type: 'baseNode',
        data: {},
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
        style: { stroke: "#60a5fa", strokeWidth: "20"},
      },
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        style: { stroke: "#60a5fa", strokeWidth: "20"},
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        style: { stroke: "#60a5fa", strokeWidth: "20"},
        targetHandle: 'b',
        type: 'smoothstep'
      },
    ]);
  }, []);

  return (
    <div className='w-96 h-96 bg-slate-300 mx-auto border'>
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
  );
};

export default CustomNodeFlow;
