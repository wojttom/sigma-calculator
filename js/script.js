let button = document.getElementById("button")
let loading = document.getElementById("loading")
let audio = new Audio('/others/xddd.wav')
let url = "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2024-05/ryan-gosling-te-240502-73e84a.jpg"
const c = document.getElementById("canv")
const ctx = c.getContext("2d")
audio.volume=0.5

function wait(time){
    return new Promise(resolve => setTimeout(resolve,time))
}
function drawGlowingText(text, x, y, mainColor,glowColor, glowDistance, iterations)
{
    ctx.shadowBlur = glowDistance;
    ctx.shadowColor = glowColor;
    ctx.strokeText(text, x, y);
    ctx.fillStyle= mainColor;
    for(let i = 0; i < iterations; i++){
        ctx.fillText(text, x, y);
    }
}

function draw(sum){
    const image = new Image()
    image.onload = () => {
        ctx.font = '50px Impact';
        ctx.drawImage(image,-240,0);
        ctx.textAlign = "center";
        drawGlowingText("I DONT KNOW",220, 50,"#fff","#000",6,4)
        drawGlowingText(sum + "?",220,680,"#fff","#000",6,4)
    }
    image.src= url
}

function reset(){
    location.reload()
}

async function script(){
    let input1 = document.forms["Form"]["num1"].value;
    let input2 = document.forms["Form"]["num2"].value;
    if(input1 != null && input2 != null){
        let sum = input1 + input2;
        loading.style.display="visible"
        loading.style.visibility="visible"
        draw(sum)
        audio.play()
        await wait(6300)
        loading.style.display="none"
        c.style.visibility="visible"
        c.style.animation="crop 4s linear"
    }else{
        alert("All Fields Must Be Filled")
    }
}
