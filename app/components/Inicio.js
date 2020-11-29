export function Inicio(){
    const $row = document.createElement("div")
    const $col = document.createElement("div")
    $row.className=" container-fluid row mt-5"
    $col.className="col-2 col-sm-2 "

    $col.innerHTML=`<img width="100%" src="./app/assets/imgs/go-lang.svg">`

    $row.appendChild($col)
    $row.appendChild(col("col-10 col-sm-5 col-md-4 bg-info m-1",link2))
    $row.appendChild(col("col-10 col-sm-5 col-md-4 bg-info m-1",link1))
    $row.innerHTML+=``
    return $row
}

function col(style,content){
    const $col = document.createElement("div")
    $col.className = `${style}`
    $col.style = `border-radius:15px; border:3px solid white;`
    $col.innerHTML = `${content}`
    return $col
}

const link2 = `<iframe style="border-radius:15px;"width="100%" height="200" src="https://www.youtube.com/embed/TEXcnUF3qZY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
const link1 = `<iframe style="border-radius:15px;"width="100%" height="200" src="https://www.youtube.com/embed/LL6z3-qbC_o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`