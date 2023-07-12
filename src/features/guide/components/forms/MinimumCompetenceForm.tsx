import Button from '@/components/Button'
import Textbox from '@/components/Textbox'
import { useCreateGuideAction, useCreateGuideStore } from '@/stores/CreateGuide'
import { useState } from 'react'

type MinimumCompetenceFormProps = {
    setIsMC: (val: boolean) => void
}

function MinimumCompetenceForm({ setIsMC}: MinimumCompetenceFormProps) {
    const [minimumCompetence, setMinimumCompetence] = useState<string>("")

    const selectedNode = useCreateGuideStore((state) => state.selectedNode)
    const setSelectedNode = useCreateGuideAction().setSelectedNode

    const onClick = () => {
        if(selectedNode){
            setSelectedNode({
                ...selectedNode,
                data: {
                    ...selectedNode.data,
                    minimumCompetences: [
                        ...selectedNode.data.minimumCompetences,
                        minimumCompetence
                    ]
                }
            })
        }
        setIsMC(false)
    }
    return (
        <div className='flex flex-col items-end'>
            <Textbox className='text-sm mb-1' placeholder='input minimum competence detail' type='text' onChange={(e) => setMinimumCompetence(e.target.value)}/>
            <Button className='px-2 py-1' color='primary' onClick={() => onClick()}>Add</Button>
        </div>
    )
}

export default MinimumCompetenceForm