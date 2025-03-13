export const find = async()=>{
    const url = new URL("https://67d2f8338bca322cc268a97a.mockapi.io/")
    url.pathname += "info"
    const answer = await fetch(url.toString(), {method: "get"})
    return await answer.json();

}
export const search = async(id)=>{

}
export const save = ()=>{

}
export const edit = ()=>{

}
export const remove = ()=>{

}