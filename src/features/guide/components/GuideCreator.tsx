import { EdgeChange, NodeChange, NodeDragHandler, Position, ReactFlow, applyEdgeChanges, applyNodeChanges, useEdgesState, useNodesState } from "reactflow";
import { useEffect, useCallback, SetStateAction } from "react"
import EditorNode from "./EditorNode";
import { NodeData } from "../type/Guide";
import { useCreateGuideAction, useCreateGuideStore } from "@/stores/CreateGuide";

const initBgColor = '#ffffff'

const connectionLineStyle = { stroke: '#fff' }
const nodeTypes = {
    editorNode: EditorNode
}

const defaultViewport = { x: 0, y: 0, zoom: 1.2 }

function GuideCreator() {
    const [nodes, setNodes] = useNodesState<NodeData>([])
    const [edges, setEdges] = useEdgesState([])

    const guide = useCreateGuideStore((state) => state.guide)
    const { setGuide } = useCreateGuideAction()

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    )

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    )

    const onNodesDragStop: NodeDragHandler = (event, node, nodes) => {
        console.log(node)
        setGuide({
            ...guide,
            nodes: guide.nodes.map((item) => {
                if(item.id === node.id){
                    return {
                        ...item,
                        position: {
                            x: node.position.x,
                            y: node.position.y
                        }
                    }
                }else{
                    return item
                }
            })
        })
    }

    useEffect(() => {
        setNodes([{
            id: '1',
            type: 'editorNode',
            data: {
                title: "Satu",
                description: ["djweh wiue diwue"],
                minimumCompetences: [],
                learningSources: [],
                images: []
            },
            position: { x: 10, y: 30 },
            sourcePosition: Position.Left,
            draggable: false
          }])
    }, [])

    useEffect(() => {
        setEdges(guide.edges)
        setNodes(guide.nodes)
    }, [guide]);

    return (
        <div className='w-[900px] flex my-4 bg-white rounded-lg border border-slate-300 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.05)] overflow-hidden'>
            <div className=''>
                <div className='w-[500px] h-[500px]'>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onNodeDragStop={onNodesDragStop}
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

            </div>
        </div>)
}

export default GuideCreator