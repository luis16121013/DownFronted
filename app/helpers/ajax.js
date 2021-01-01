export function ajax(props){
    let {url,met,data,cbSuccess} = props;
    
    const header = new Headers()
    header.append('Content-Type','application/json')
    
    fetch(url,{
        method: met,
        headers:header,
        body: JSON.stringify(data),
    })
        .then(res=>res.ok?res.json(): Promise.reject(res))
        .then(json=>cbSuccess(json))
        .catch(err=>{
            let message = err.statusText || "ocurrio un error al acceder a la API";

            rootID.innerHTML = `
                <div class="error">
                    <p>Error ${err.type}:${message}</p>
                </div>
            `;

            console.log(err)
        })
}
