import { Guide, NodeData } from "@/features/guide/type/Guide"
import { Node, Position } from "reactflow"
import { create } from "zustand"

type CreateGuideState = {
    guide: Guide
    selectedNode: Node<NodeData> | undefined

    actions: {
        setGuide: (guide: Guide) => void
        setSelectedNode: (selectedNode: Node<NodeData> | undefined) => void
    }
}

export const useCreateGuideStore = create<CreateGuideState>((set) => ({
    guide: {
        id: "",
        userId: "",
        title: "",
        uploadDate: "",
        likeCount: 0,
        commentCount: 0,
        viewPort: {x: 0,y: 0, zoom: 1.2},
        nodes: [{
            id: '1',
            type: 'editorNode',
            data: {
                title: "Satu",
                descriptions: ["djweh wiue diwue"],
                images: [],
                learningSources: [],
                minimumCompetences: []
            },
            position: { x: 10, y: 30 },
            sourcePosition: Position.Left,
            draggable: true
          }],
        edges: []
    },
    selectedNode: undefined,

    actions: {
        setGuide(guide){
            set({guide})
        },
        setSelectedNode(selectedNode){
            set({selectedNode})
        }
    }
}))

export function useCreateGuideAction(){
    return useCreateGuideStore((state) => state.actions)
}