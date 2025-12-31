const clock = document.getElementById('clock')
let date = new Date()


setInterval(function(){
    //console.log(date.toLocaleDateString())
    clock.innerHTML = date.toLocaleTimeString()

},1000)