import Button from '@/components/Button'
import Textbox from '@/components/Textbox'
import { useCreateGuideAction, useCreateGuideStore } from '@/stores/CreateGuide'
import { useState } from 'react'

type DescriptionFormProps = {
    setIsDesc: (val: boolean) => void
}

function DescriptionForm({ setIsDesc}: DescriptionFormProps) {
    const [description, setDescription] = useState<string>("")

    const selectedNode = useCreateGuideStore((state) => state.selectedNode)
    const setSelectedNode = useCreateGuideAction().setSelectedNode

    const onClick = () => {
        if(selectedNode){
            setSelectedNode({
                ...selectedNode,
                data: {
                    ...selectedNode.data,
                    descriptions: [
                        ...selectedNode.data.descriptions,
                        description
                    ]
                }
            })
        }
        setIsDesc(false)
    }
    return (
        <div className='flex flex-col items-end'>
            <Textbox className='text-sm mb-1' placeholder='input description' onChange={(e) => setDescription(e.target.value)}/>
            <Button className='px-2 py-1' color='primary' onClick={() => onClick()}>Add</Button>
        </div>
    )
}

export default DescriptionForm