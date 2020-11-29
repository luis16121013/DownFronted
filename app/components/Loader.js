
export function Loader(){
    const $p = document.createElement("p")
    $p.innerHTML = `<img src="./app/assets/imgs/loader.svg" width="70px;">`
    $p.className = "mt-5 text-center loader"
    return $p
}