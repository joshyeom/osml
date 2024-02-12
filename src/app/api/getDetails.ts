export async function getDetails(itemName: string){
    try{
      const res = await fetch(`/item/${(itemName)}`)
      return res.json()
    }catch(err){
      console.log(err)
    }
}