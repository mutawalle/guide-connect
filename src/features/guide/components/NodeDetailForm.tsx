import Textbox from "@/components/Textbox"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LearningSource } from "../type/Guide"
import DescriptionForm from "./forms/DescriptionForm"
import Button from "@/components/Button"
import { useCreateGuideAction, useCreateGuideStore } from "@/stores/CreateGuide"
import ImageForm from "./forms/ImageForm"
import MinimumCompetenceForm from "./forms/MinimumCompetenceForm"
import LearningResourceForm from "./forms/LearningResource"

type EditNode = {
    title: string
}


function NodeDetailForm() {
    const [descriptions, setDescriptions] = useState<string[]>([])
    const [images, setImages] = useState<File[]>([])
    const [minimumCompetences, setMinimumCompetences] = useState<string[]>([])
    const [learningSources, setLearningResources] = useState<LearningSource[]>([])

    const guide = useCreateGuideStore((state) => state.guide)
    const selectedNode = useCreateGuideStore((state) => state.selectedNode)
    const { setSelectedNode, setGuide } = useCreateGuideAction()

    const [isDesc, setIsDesc] = useState<boolean>(false)
    const [isImg, setIsImg] = useState<boolean>(false)
    const [isMC, setIsMC] = useState<boolean>(false)
    const [isLR, setIsLR] = useState<boolean>(false)

    const onSubmit = () => {
        if(selectedNode){
            setGuide({
                ...guide,
                nodes: guide.nodes.map((node) => {
                    if(node.id ===  selectedNode.id){
                        return selectedNode
                    }else{
                        return node
                    }
                })
            })
        }
        setSelectedNode(undefined)
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
                <Textbox className="mb-3" label="Node Title" placeholder="input node title"/>
                <h4 className='w-full text-slate-500'>Description</h4>
                {
                    selectedNode?.data.descriptions.map((desc) => <p>{desc}</p>)
                }
                {
                    isDesc ?
                    <DescriptionForm setIsDesc={setIsDesc}/> :
                    <Button
                        className="w-full mb-3"
                        color="transparent" 
                        onClick={() => setIsDesc(true)}
                    >Add Description Paragraph</Button>
                }
                <h4 className='w-full text-slate-500'>Image</h4>
                {
                    selectedNode?.data.images.map((image) => {
                        if(typeof image == "string"){
                            return <p>{image}</p>
                        }
                    })
                }
                {
                    isImg ? 
                    <ImageForm setIsImg={setIsImg}/> : 
                    <Button
                        className="w-full mb-3"
                        color="transparent" 
                        onClick={() => setIsImg(true)}
                    >Add Image</Button>
                }
                <h4 className='w-full text-slate-500'>Minimum Competence</h4>
                {
                    selectedNode?.data.minimumCompetences.map((mc) => <p>{mc}</p>)
                }
                {
                    isMC ?
                    <MinimumCompetenceForm setIsMC={setIsMC}/> :
                    <Button
                        className="w-full mb-3"
                        color="transparent" 
                        onClick={() => setIsMC(true)}
                    >Add Minimum Competence</Button>
                }
                <h4 className='w-full text-slate-500'>Learning Resource</h4>
                {
                    selectedNode?.data.learningSources.map((lr) => <a href={lr.url}>{lr.url}</a>)
                }
                {
                    isLR ?
                    <LearningResourceForm setIsLR={setIsLR}/> :
                    <Button
                        className="w-full mb-3"
                        color="transparent" 
                        onClick={() => setIsLR(true)}
                    >Add Minimum Competence</Button>
                }
                <Button color="primary" onClick={() => onSubmit()}>Save</Button>
        </div>
    )
}

export default NodeDetailForm