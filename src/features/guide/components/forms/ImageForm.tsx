import Button from '@/components/Button'
import Textbox from '@/components/Textbox'
import { useCreateGuideAction, useCreateGuideStore } from '@/stores/CreateGuide'
import { useState } from 'react'

type ImageFormProps = {
    setIsImg: (val: boolean) => void
}

function ImageForm({ setIsImg}: ImageFormProps) {
    const [file, setFile] = useState<File>()

    const selectedNode = useCreateGuideStore((state) => state.selectedNode)
    const setSelectedNode = useCreateGuideAction().setSelectedNode

    const onClick = () => {
        if(selectedNode && file){
            const reader = new FileReader()
            if(reader.onloadend){
                const res =  reader.result as string
                console.log(res)
            }
            reader.readAsDataURL(file)
            setSelectedNode({
                ...selectedNode,
                data: {
                    ...selectedNode.data,
                    images: [
                        ...selectedNode.data.images,
                        file
                    ]
                }
            })
        }
        setIsImg(false)
    }
    return (
        <div className='flex flex-col items-end'>
            <input type='file' accept='image/*' onChange={(e) => setFile(e.target.files?.[0])}/>
            <Button className='px-2 py-1' color='primary' onClick={() => onClick()}>Add</Button>
        </div>
    )
}

export default ImageForm