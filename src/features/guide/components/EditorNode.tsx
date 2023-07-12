import { Handle, NodeProps, Position } from 'reactflow'
import * as Popover from '@radix-ui/react-popover'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { AiOutlinePlus } from 'react-icons/ai'
import { useEffect } from 'react'
import { NodeData } from '../type/Guide'
import { v4 as uuidv4 }from 'uuid'
import { useCreateGuideAction, useCreateGuideStore } from '@/stores/CreateGuide'

function EditorNode({ id, type, data, xPos, yPos }: NodeProps<NodeData>) {

    const guide = useCreateGuideStore((state) => state.guide)
    const selectedNode = useCreateGuideStore((state) => state.selectedNode)
    const {setGuide, setSelectedNode} = useCreateGuideAction()

    useEffect(() => {
        console.log(data)
    }, [])

    const addNode = (srcH: string, trgH: string) => {
        console.log("run")
        const nodeId = uuidv4()
        setGuide({
            ...guide,
            nodes: [
                ...guide.nodes,
                {
                    id: nodeId,
                    type: 'editorNode',
                    data: {
                        title: "reygfre",
                        descriptions: ["vrif"],
                        images: [],
                        minimumCompetences: [],
                        learningSources: []
                    },
                    position: { 
                        x: srcH == 'a' ? xPos-30 : srcH == 'c' ? xPos+30 : xPos, 
                        y: srcH == 'b' ? yPos-30 : srcH == 'd' ? yPos+30 : yPos
                    },
                    draggable: true
                }
            ],
            edges: [
                ...guide.edges,
                {
                    id: `${id}-${nodeId}`,
                    source: id,
                    target: nodeId,
                    sourceHandle: srcH,
                    targetHandle: trgH,
                    style: { stroke: "#60a5fa", strokeWidth: "20" }
                }
            ]
        })
    }
    
    return (
        <>
            <Handle id='a' type="source" position={Position.Left} className='invisible'/>
            <Handle id='b' type="source" position={Position.Top} className='invisible' />
            <Handle id='c' type="source" position={Position.Right} className='invisible' />
            <Handle id='d' type="source" position={Position.Bottom} className='invisible' />
            <Handle id='e' type="target" position={Position.Left} className='invisible' />
            <Handle id='f' type="target" position={Position.Top} className='invisible' />
            <Handle id='g' type="target" position={Position.Right} className='invisible' />
            <Handle id='h' type="target" position={Position.Bottom} className='invisible' />
            <div className='w-24 h-24 flex flex-col items-center justify-evenly'>
                {
                    id == selectedNode?.id &&
                    <button className='rounded-full border-2 border-sky-600' onClick={() => addNode("b", "h")}><AiOutlinePlus color='blue' /></button>
                }
                <div className='w-full flex items-center justify-evenly'>
                    {
                        id == selectedNode?.id && 
                        <button className='h-min rounded-full border-2 border-sky-600' onClick={() => addNode("a", "g")}><AiOutlinePlus color='blue' /></button>
                    }
                    <button className="rounded-full" aria-label="Update dimensions" onClick={() => setSelectedNode({id, type, data, position: {x: xPos, y: yPos}})}>
                        <div className='w-12 h-12 flex justify-center items-center bg-sky-600 rounded-full'>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full'>
                                <div className='w-7 h-7 bg-sky-500 rounded-full' />
                            </div>
                        </div>
                    </button>
                    {
                        id == selectedNode?.id &&
                        <button className='rounded-full border-2 border-sky-600' onClick={() => addNode("c", "e")}><AiOutlinePlus color='blue' /></button>
                    }
                </div>
                {
                    id == selectedNode?.id &&
                    <button className='rounded-full border-2 border-sky-600' onClick={() => addNode("d", "f")}><AiOutlinePlus color='blue' /></button>
                }
            </div>
        </>
    )
}

export default EditorNode