import { EdgeChange, NodeChange, NodeDragHandler, Position, ReactFlow, applyEdgeChanges, applyNodeChanges, useEdgesState, useNodesState, useViewport } from "reactflow";
import { useEffect, useCallback, SetStateAction } from "react"
import EditorNode from "./EditorNode";
import { NodeData } from "../type/Guide";
import { useCreateGuideAction, useCreateGuideStore } from "@/stores/CreateGuide";
import * as ScrollArea from '@radix-ui/react-scroll-area'
import NodeDetailForm from "./NodeDetailForm";
import GuideDetailForm from "./GuideDetailForm";

const initBgColor = '#ffffff'

const connectionLineStyle = { stroke: '#fff' }
const nodeTypes = {
    editorNode: EditorNode
}

const defaultViewport = { x: 0, y: 0, zoom: 1.2 }

function GuideCreator() {
    const { x, y, zoom } = useViewport()
    const [nodes, setNodes] = useNodesState<NodeData>([])
    const [edges, setEdges] = useEdgesState([])

    const selectedNode = useCreateGuideStore((state) => state.selectedNode)
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
                if (item.id === node.id) {
                    return {
                        ...item,
                        position: {
                            x: node.position.x,
                            y: node.position.y
                        }
                    }
                } else {
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
                descriptions: ["djweh wiue diwue"],
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

    useEffect(() => {
        console.log(x, y, zoom)
        setGuide({
            ...guide,
            viewPort: {
                x: x,
                y: y,
                zoom: zoom
            }
        })
    }, [x, y, zoom])

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
                    />
                </div>
            </div>
            <div className='w-[400px] border-l'>
                <ScrollArea.Root className="w-full h-[500px]">
                    <ScrollArea.Viewport className='w-full h-full rounded-lg p-4'>
                        {
                            selectedNode ?
                            <NodeDetailForm/> :
                            <GuideDetailForm/>
                        }
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar className="w-2 mr-1 flex touch-none select-none" orientation="vertical">
                        <ScrollArea.Thumb className="grow relative rounded-md bg-slate-300" />
                    </ScrollArea.Scrollbar>
                </ScrollArea.Root>
            </div>
        </div>)
}

export default GuideCreator