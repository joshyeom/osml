export async function getList(){
    try{
      const res = await fetch(`http://localhost:3000`)
      return res.json()
    }catch(err){
      console.log(err)
    }
}