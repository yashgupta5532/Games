let inputDir={x:0,y:0};
const foodSound=new Audio ("/music/food.mp3")
const gameoverSound=new Audio ("/music/gameover.mp3")
const moveSound=new Audio ("/music/move.mp3")
const musicSound=new Audio ("/music/music.mp3")
 
let food ={x:6,y:8};
let snakeArr =[{x:13,y:15}]
let speed=5;
let lastPaintTime=0;
function main(ctime){
    // console.log(ctime)
    if((ctime-lastPaintTime)/1000<(1/speed)){
        return;
    }
    lastPaintTime=ctime
    window.requestAnimationFrame(main)
    gameEngine();
}
function isCollide(snake){
    //if you strike on wall
    if(snake[0].x>17 || snake[0].y>17 ||snake[0].x<0 ||snakeArr[0].y<0){
        return true;
    }
    //if you bump into yourself
    for(i=1;i<snakeArr.length;i++){
        if(snake[0].x===snake[i].x  && snake[0].y===snake[i].y){
            return true;
        }
    }
    return false;
}

function gameEngine(){
    if (isCollide(snakeArr)){
        musicSound.pause();
        gameoverSound.play();
    }
    // 1. Display the snake and food
    // 2. Move the snake and food
    board.innerHTML="";
    snakeArr.forEach((element,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=element.y;
        snakeElement.style.gridColumnStart=element.x;
        if(index==0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);
    });
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

    //moving the snake and food
    for(let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x +=inputDir.x;
    snakeArr[0].y +=inputDir.y;
    //if you have eaten the food play the sound and regenerate it 
    if(snakeArr[0].x===food.x && snakeArr[0].y===food.y){
        foodSound.play();
        snakeArr.unshift(snakeArr[0].x+inputDir.x,snakeArr[0].y+inputDir.y);
        let a=17,b=17;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    } 
    
}

window.requestAnimationFrame(main);
window.addEventListener("keydown",(e)=>{
    inputDir={x:0,y:1};
    // musicSound.play();
    switch(e.key){
        case ("ArrowUp"):
            inputDir.x=0;
            inputDir.y=-1;
            console.log("arrowup");
            break;
        case ("ArrowDown"):
            inputDir.x=0;
            inputDir.y=1;
            console.log("arrowdown");
            break;
        case ("ArrowLeft"):
            inputDir.x=-1;
            inputDir.y=0;
            console.log("arrowleft");
            break;
        case ("ArrowRight"):
            inputDir.x=1;
            inputDir.y=0;
            console.log("arrowright");
            break;
        default :
            break;
    }
});