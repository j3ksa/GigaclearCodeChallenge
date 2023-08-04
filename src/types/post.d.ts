export interface Post {
    id: number
    title: string
    titleDescription: string
    timestamp: string
    image: string
    event: Event
    descriptionTitle: string
    paragraphs: Paragraphs
}
  
export interface Event {
    name: string
    price: string
    time: string
}
  
export interface Paragraphs {
    firstParagraph: string
    secondParagraph: string
    thirdParagraph: string
    fourthParagraph: string
    fifthParagraph: string
    sixthParagraph: string
    seventhParagraph: string
}
  