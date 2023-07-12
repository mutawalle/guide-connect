import Button from '@/components/Button'
import Textbox from '@/components/Textbox'
import { useCreateGuideAction, useCreateGuideStore } from '@/stores/CreateGuide'
import { useState } from 'react'

type LearningResourceFormProps = {
    setIsLR: (val: boolean) => void
}

function LearningResourceForm({ setIsLR}: LearningResourceFormProps) {
    const [label, setLabel] = useState<string>("")
    const [url, setUrl] = useState<string>("")

    const selectedNode = useCreateGuideStore((state) => state.selectedNode)
    const setSelectedNode = useCreateGuideAction().setSelectedNode

    const onClick = () => {
        if(selectedNode){
            setSelectedNode({
                ...selectedNode,
                data: {
                    ...selectedNode.data,
                    learningSources: [
                        ...selectedNode.data.learningSources,
                        {
                            label,
                            url
                        }
                    ]
                }
            })
        }
        setIsLR(false)
    }
    return (
        <div className='flex flex-col items-end'>
            <Textbox className='text-sm mb-1' type='text' placeholder='input label' onChange={(e) => setLabel(e.target.value)}/>
            <Textbox className='text-sm mb-1' type='text' placeholder='input URL' onChange={(e) => setUrl(e.target.value)}/>
            <Button className='px-2 py-1' color='primary' onClick={() => onClick()}>Add</Button>
        </div>
    )
}

export default LearningResourceForm