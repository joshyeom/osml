export interface DataProps {
    items: {
      [key: string]:{
        name: string
      }
    }[]
    mobs: {
      [key: string]:{
        name: string
        description: string
      }
    }[]
}