import { Handle, NodeProps, Position } from 'reactflow'
import * as Popover from '@radix-ui/react-popover'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { NodeData } from '../type/Guide'
import { useEffect } from 'react'

function BaseNode({ data }: NodeProps<NodeData>) {

    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <>
            <Handle id='a' type="source" position={Position.Left} className='invisible'/>
            <Handle id='b' type="source" position={Position.Top} className='invisible'/>
            <Handle id='c' type="source" position={Position.Right} className='invisible'/>
            <Handle id='d' type="source" position={Position.Bottom} className='invisible'/>
            <Handle id='e' type="target" position={Position.Left} className='invisible'/>
            <Handle id='f' type="target" position={Position.Top} className='invisible'/>
            <Handle id='g' type="target" position={Position.Right} className='invisible'/>
            <Handle id='h' type="target" position={Position.Bottom} className='invisible'/>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <button className="rounded-full" aria-label="Update dimensions">
                        <div className='w-12 h-12 flex justify-center items-center bg-sky-600 rounded-full'>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full'>
                                    <div className='w-7 h-7 bg-sky-500 rounded-full' />
                            </div>
                        </div>
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className="bg-white" sideOffset={5}>
                        <ScrollArea.Root className="w-80 h-52 bg-slate-50 rounded-lg shadow-xl">
                            <ScrollArea.Viewport className='w-full h-full rounded-lg'>
                                <div className='w-full h-full p-4'>
                                    <h4 className='font-medium'>{data.title}</h4>
                                    {
                                        data.descriptions.length > 0 &&
                                        <>
                                            <h5 className='mt-2 mb-1'>Description</h5>
                                            {
                                                data.descriptions.map((desc) => <p className='mb-2 text-slate-600'>{desc}</p>)
                                            }
                                        </>
                                    }
                                    {
                                        data.images.length > 0 && 
                                        <>
                                            <h5 className='mt-2 mb-1'>Images</h5>
                                            {
                                                data.images.map((image) => {
                                                    if(typeof image == "string"){
                                                        return <img className='rounded-xl mb-2' src={image}/>
                                                    }
                                                })
                                            }
                                        </>
                                    }
                                    {
                                        data.minimumCompetences.length > 0 &&
                                        <>
                                            <h5 className='mt-2 mb-1'>Minimum Competences</h5>
                                            {
                                                data.minimumCompetences.map((minimumCompetence) => <span className='block mb-1 text-slate-600'>{minimumCompetence}</span>)
                                            }
                                        </>
                                    }
                                    {
                                        data.learningSources.length > 0 && 
                                        <>
                                            <h5 className='mt-3 mb-1'>Learning Resources</h5>
                                            {
                                                data.learningSources.map((learningResource) => <a className='block mb-1 text-slate-600' target="_blank" href={learningResource.url}>{learningResource.label}</a>)
                                            }
                                        </>
                                    }
                                </div>
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar className="w-2 mr-1 flex touch-none select-none" orientation="vertical">
                                <ScrollArea.Thumb className="grow relative rounded-md bg-slate-500" />
                            </ScrollArea.Scrollbar>
                        </ScrollArea.Root>
                        <Popover.Arrow className="fill-slate-100" />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </>
    )
}

export default BaseNode