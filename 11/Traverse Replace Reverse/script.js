window.onload = function (){
    let num = document.getElementById("num")
    let press = document.getElementById("press")
    let list = document.getElementById("list")

    press.onclick = function(){
        let start = new Date().getTime()
        let N = parseInt(num.value)
        let ok = ""
        for(let i = 1; i<=N; i++){
            ok += '<li>' + i + '</li>'
        }
        list.innerHTML = ok
        console.log(new Date().getTime() -  start)
    }

}

