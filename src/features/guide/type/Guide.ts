import { Edge, Node } from "reactflow"

export type Guide = {
    id: string
    userId: string
    title: string
    uploadDate: string
    likeCount: number
    commentCount: number
    nodes: Node<NodeData>[]
    edges: Edge[]
}

export type NodeData = {
    title: string
    description: string[]
    minimumCompetences: string[]
    images: string[]
    learningSources: LearningSource[]
}

export type LearningSource = {
    label: string,
    url: string
}