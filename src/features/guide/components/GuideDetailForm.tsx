import Button from "@/components/Button"
import Textbox from "@/components/Textbox"
import { useCreateGuideAction, useCreateGuideStore } from "@/stores/CreateGuide"
import { FormEvent } from "react"

function GuideDetailForm() {
    const guide = useCreateGuideStore((state) => state.guide)
    const setGuide = useCreateGuideAction().setGuide

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setGuide({...guide, title: e.currentTarget.value})
    }
    const onSubmit = () => {
        // axios.post
    }

    return (
        <div className="w-full h-full">
            <form className="h-full h-full flex flex-col items-center" onSubmit={onSubmit}>
                <Textbox className="mb-2" label="Guide Title" placeholder="input guide title" type="text" onChange={(e) => handleChange(e)}/>
                <Button color="primary" type="submit" >Upload</Button>
            </form>
        </div>
    )
}

export default GuideDetailForm