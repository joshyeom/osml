export interface filterAndSortByNameProps{
    data: {
        [id:string]:{
            name: string
        }
    };
    keyword: string;
    category: string;
}



export const filterAndSortByName = ({data, keyword, category}: filterAndSortByNameProps) => {
    return Object.keys(data)
      .filter(id => id !== "_id" && data[id].name.includes(keyword))
      .map(id => ({
        name: data[id].name,
        imageUrl: category === "item" ? `http://maplestory.io/api/gms/62/item/${id}/icon?resize=3` : `http://maplestory.io/api/gms/62/mob/animated/${id}/move`,
        category,
        keyword: keyword,
        id: id
      }))
      .sort((a, b) => a.name.startsWith(keyword) && !b.name.startsWith(keyword) ? -1 : 
                     !a.name.startsWith(keyword) && b.name.startsWith(keyword) ? 1 : 0)
      .slice(0, 5);
  }