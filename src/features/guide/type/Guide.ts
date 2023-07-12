import { Edge, Node, Viewport } from "reactflow"

export type Guide = {
    id: string
    userId: string
    title: string
    uploadDate: string
    likeCount: number
    commentCount: number
    viewPort: Viewport
    nodes: Node<NodeData>[]
    edges: Edge[]
}

export type NodeData = {
    title: string
    descriptions: string[]
    minimumCompetences: string[]
    images: (string | File)[]
    learningSources: LearningSource[]
}

export type LearningSource = {
    label: string,
    url: string
}