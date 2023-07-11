import { Guide } from "@/features/guide/type/Guide"
import { Position } from "reactflow"
import { create } from "zustand"

type CreateGuideState = {
    guide: Guide
    selectedNodeId: string

    actions: {
        setGuide: (guide: Guide) => void
        setSelectedNodeId: (selectedNodeId: string) => void
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
        nodes: [{
            id: '1',
            type: 'editorNode',
            data: {
                title: "Satu",
                description: ["djweh wiue diwue"]
            },
            position: { x: 10, y: 30 },
            sourcePosition: Position.Left,
            draggable: true
          }],
        edges: []
    },
    selectedNodeId: "",

    actions: {
        setGuide(guide){
            set({guide})
        },
        setSelectedNodeId(selectedNodeId){
            set({selectedNodeId})
        }
    }
}))

export function useCreateGuideAction(){
    return useCreateGuideStore((state) => state.actions)
}