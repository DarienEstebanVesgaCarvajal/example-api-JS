export const find = async()=>{
    const url = new URL("https://67d2f8338bca322cc268a97a.mockapi.io/")
    url.pathname += "info"
    const answer = await fetch(url.toString(), {method: "get"})
    return await answer.json();
}
export const search = async(id)=>{
    const url = new URL("https://67d2f8338bca322cc268a97a.mockapi.io/")
    url.pathname += `info/${id}`
    const answer = await fetch(url.toString(), {method: "get"})
    return await answer.json();
}
export const save = async(data)=>{
    const url = new URL("https://67d2f8338bca322cc268a97a.mockapi.io/")
    const headers = new Headers()
    headers.set("Content-Type", "application/json")
    url.pathname += "info"
    const config = {
        method: "post",
        headers,
        body: JSON.stringify(data)
    }
    const answer = await fetch(url.toString(), config);
    return await answer.json();
}
export const edit = async(data)=>{
    const {id} = data;
    if(typeof id === "undefined") return "No id provided";
    const updateAt = Math.floor(Date.now() / 1000);
    delete data.id;
    const url = new URL("https://67d2f8338bca322cc268a97a.mockapi.io/")
    const headers = new Headers()
    headers.set("Content-Type", "application/json")
    url.pathname += `info/${id}`
    const config = {
        method: "put",
        headers,
        body: JSON.stringify(data)
    }
    const answer = await (await fetch(url.toString(), config)).json();
    answer.updateAt = new Date(answer.updateAt * 1000);
    return answer;
}
export const remove = ()=>{

}