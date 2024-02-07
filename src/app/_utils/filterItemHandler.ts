import { SearchProps } from "../types/SearchProps";

export const filterItemHandler = (items :SearchProps["items"] ,keyword: string) => {
    if (keyword) {
        const filteredItem = items.filter(v => v.name.includes(keyword));
        const sortedItem = filteredItem.sort((a, b) => {
          if(a.name.startsWith(keyword) && !b.name.startsWith(keyword)){
              return -1
          }   else if (!a.name.startsWith(keyword) && b.name.startsWith(keyword)) {
              return 1;
            } else {
              return 0;
            }
        })
        return sortedItem
      }
}