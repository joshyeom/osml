const controller = new AbortController();
const signal = controller.signal;

export async function getList(){
    try{
      const res = await fetch(`http://localhost:8080`, {
        cache: "no-cache",
        signal
      } )
      return res.json()
    }catch(err){
      console.log(err)
    }
}