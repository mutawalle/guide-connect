import * as ScrollArea from '@radix-ui/react-scroll-area'
import Guide from './Guide'

function ListGuide() {
    return (
        <ScrollArea.Root className="w-full h-screen rounded-lg">
            <ScrollArea.Viewport className='w-full h-full'>
                <div className='w-full h-full p-4 flex flex-col items-center'>
                    <Guide/>
                    <Guide/>
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="w-2 mr-1 flex touch-none select-none" orientation="vertical">
                <ScrollArea.Thumb className="grow relative rounded-md bg-slate-500" />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    )
}

export default ListGuide