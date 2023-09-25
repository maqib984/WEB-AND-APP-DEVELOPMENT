var forward = 0;
function abc(){
    console.log(event.keyCode)
    var fight = document.getElementById("fight")
    var audio = document.getElementById('audio')
    var character = document.getElementById('character')
    if(event.keyCode === 13){
   audio.src = "images/audio.mp3"
   setTimeout(function () {
    fight.src = 'images/3-Number-PNG-HD.png'
},1000 )
setTimeout(function () {
    fight.src = 'images/pngwing.com (2).png'
},2000 )
setTimeout(function () {
    fight.src = 'images/1 (2).png'
},3000 )
setTimeout(function () {
    fight.src = 'images/Fight.png'
    fight.style.marginTop = "100px"
},4000 )
setTimeout(function () {
    fight.src = ''
},5000 )
}
 if(event.keyCode === 68){
    forward = forward + 10;
    character.style.right = forward + 'px'
    character.src = "images/leo-warzard-walkf.gif"
    character.style.width = "400px"
    }
    if(event.keyCode === 65){
        forward = forward - 10;
        character.style.right = forward + 'px'
        }
        if(event.keyCode === 87){
            character.src = 'images/leo-air8.gif'
            character.style.width = "400px"
            }
            if(event.keyCode === 32){
                character.src = 'images/leo-marsrush.gif'
                character.style.width = "550px"
                }
                setTimeout(function (){
                   character.src = "images/leo-stance.gif"
                   character.style.width = "300px"
                },1500)
}
window.onkeydown = abc