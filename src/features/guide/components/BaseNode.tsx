import { Handle, NodeProps, Position } from 'reactflow'
import * as Popover from '@radix-ui/react-popover'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { NodeData } from '../type/Guide'

function BaseNode({ data }: NodeProps<NodeData>) {
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
                        <ScrollArea.Root className="w-72 h-48 bg-slate-100 rounded-lg shadow-xl">
                            <ScrollArea.Viewport className='w-full h-full rounded-lg'>
                                <div className='w-full h-full p-4'>
                                    <h4>{data.title}</h4>
                                    {
                                        data.description.map((desc) => <p>{desc}</p>)
                                    }
                                    {
                                        data.minimumCompetences.length > 0 &&
                                        <>
                                            <h5>Minimum Competences</h5>
                                            {
                                                data.minimumCompetences
                                            }
                                        </>
                                    }
                                    {
                                        
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