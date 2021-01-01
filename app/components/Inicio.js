export function Inicio(){
    const $row = document.createElement("div")
    $row.className=" container-fluid row" 
    $row.style = "margin:30px 0";


    $row.appendChild(col("col-12 col-sm-6 col-md-4 col-lg-3 ",Iframe(`https://www.youtube.com/embed/TEXcnUF3qZY`)))
    $row.appendChild(col("col-12 col-sm-6 col-md-4 col-lg-3 ",Iframe(`https://www.youtube.com/embed/LL6z3-qbC_o`)))
    return $row
}

function col(style,content){
    const $col = document.createElement("div")
    $col.className = `${style}`
    $col.style = ''//`border-radius:15px; border:3px solid white;`
    $col.appendChild(content)
    return $col
}

function Iframe(httpRoute){
    const $iframe = document.createElement('iframe');
    $iframe.src=`${httpRoute}`;
    $iframe.style=`border:4px solid white;border-radius:15px;`;
    $iframe.width="100%";
    $iframe.height="200"
    $iframe.frameborder="0";
    $iframe.allow=`accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture`;
    $iframe.allowFullscreen;
    return $iframe;
}

//const imgGopher=`<img width="100%" height="200px" src="./app/assets/imgs/go-lang.svg">`

