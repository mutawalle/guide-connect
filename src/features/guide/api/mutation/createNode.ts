import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { NodeProps } from "reactflow"
import { Guide, NodeData } from "../../type/Guide"

const useCreateNode = () => {
    return useMutation(
        (node: NodeProps<NodeData>) => { 
            // oldGuide = {}
            return axios.post(`${import.meta.env.VITE_API_URL}/guide`, node)
        },
        {
            onMutate: () => {},
            onSuccess: () => {},
            onError: () => {}
        }
    )
}