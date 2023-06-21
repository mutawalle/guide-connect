import { NodeProps } from 'reactflow'
import * as Popover from '@radix-ui/react-popover'
import * as ScrollArea from '@radix-ui/react-scroll-area';
import 'index.css'

function BaseNode({ data }: NodeProps) {
    return (
        <div className='w-12 h-12 flex justify-center items-center bg-sky-600 rounded-full'>
            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full'>
                <Popover.Root>
                    <Popover.Trigger asChild>
                        <button className="IconButton" aria-label="Update dimensions">
                            <div className='w-8 h-8 bg-sky-500 rounded-full' />
                        </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content className="bg-white" sideOffset={5}>
                            <ScrollArea.Root className="w-72 h-48 bg-slate-100 rounded-lg">
                                <ScrollArea.Viewport className='w-full h-full rounded-lg'>
                                    <div className='w-full h-full p-4'>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                        <div>ckehrwfir</div>
                                    </div>
                                </ScrollArea.Viewport>
                                <ScrollArea.Scrollbar className="w-2 flex touch-none select-none" orientation="vertical">
                                    <ScrollArea.Thumb className="grow relative rounded-md bg-slate-500" />
                                </ScrollArea.Scrollbar>
                                <ScrollArea.Corner className="ScrollAreaCorner" />
                            </ScrollArea.Root>
                            <Popover.Arrow className="fill-white" />
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
            </div>
        </div>
    )
}

export default BaseNode