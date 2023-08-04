export interface HomePage {
    homeTitle: string
    posts: PostMolecule[]
}
  
export interface PostMolecule {
    id: string
    image: string
    title: string
    tags: string[]
    timestamp: string
    description: string
}
  