let first = true;
let inter1;
let inter2;
let doing = false;
const elemF = document.getElementById("focus");
const elemR = document.getElementById("rest");
let focus = elemF.value + "開始";
let rest = elemR.value + "開始";
elemF.addEventListener('input', change);
elemR.addEventListener('input', change);
function change(event){
    const value = event.target.value + "開始";
    const dValue = event.target.defaultValue;
    if(dValue == "集中"){
        focus = value;
        if(doing == false){
            document.getElementById("button").textContent = value;
        }
    }else if(dValue == "休憩"){
        rest = value;
        if(doing == true){
            document.getElementById("button").textContent = value;
        }
    }
}
const ft = document.getElementById("ft").style;
const rt = document.getElementById("rt").style;
function button(){
    if(first){
        document.getElementById("button").insertAdjacentHTML("afterend",`<button type="button" id="reset" onclick=reset();>一時停止</button>`);
        first = false;
    }
    const button = document.getElementById("button").textContent;
    if(button == focus){
        document.getElementById("button").textContent = rest;
        rt.filter = "brightness(0.7) blur(3px)";
        ft.filter = "inherit";
        doing = true;
        if(document.getElementById("reset").textContent == "リセット"){
            document.getElementById("reset").textContent = "一時停止"
        }
        inter1 = setInterval(() => {
            if(document.getElementById("button").textContent == focus){
                clearInterval(inter1);
                return;
            }
            let minute1 = document.getElementById("minute1").textContent;
            let second1 = document.getElementById("second1").textContent;
            let hour1 = document.getElementById("hour1").textContent;
            let hourN1 = Number(hour1);
            let secondN1 = Number(second1);
            let minuteN1 = Number(minute1);
            secondN1++;
            if(secondN1 >= 60){
                secondN1 = 0;
                minuteN1++;
            }
            if(minuteN1 >= 60){
                minuteN1 = 0;
                hourN1++;
            }
            let secondNS1 = String(secondN1);
            let minuteNS1 = String(minuteN1);
            let hourNS1 = String(hourN1);
            if(secondNS1.length == 1){
                secondNS1 = "0" + secondNS1;
            }
            if(minuteNS1.length == 1){
                minuteNS1 = "0" + minuteNS1;
            }
            if(hourNS1.length == 1){
                hourNS1 = "0" + hourNS1;
            }
            document.getElementById("second1").textContent = secondNS1;
            document.getElementById("minute1").textContent = minuteNS1;
            document.getElementById("hour1").textContent = hourNS1;
        }, 1000)
    }else if(button == rest){
        document.getElementById("button").textContent = focus;
        ft.filter = "brightness(0.7) blur(3px)";
        rt.filter = "inherit";
        doing = false;
        inter2 = setInterval(() => {
            if(document.getElementById("button").textContent == rest){
                clearInterval(inter2);
                return;
            }
            let minute2 = document.getElementById("minute2").textContent;
            let second2 = document.getElementById("second2").textContent;
            let hour2 = document.getElementById("hour2").textContent;
            let hourN2 = Number(hour2);
            let secondN2 = Number(second2);
            let minuteN2 = Number(minute2);
            secondN2++;
            if(secondN2 >= 60){
                secondN2 = 0;
                minuteN2++;
            }
            if(minuteN2 >= 60){
                minuteN2 = 0;
                hourN2++;
            }
            let secondNS2 = String(secondN2);
            let minuteNS2 = String(minuteN2);
            let hourNS2 = String(hourN2);
            if(secondNS2.length == 1){
                secondNS2 = "0" + secondNS2;
            }
            if(minuteNS2.length == 1){
                minuteNS2 = "0" + minuteNS2;
            }
            if(hourNS2.length == 1){
                hourNS2 = "0" + hourNS2;
            }
            document.getElementById("second2").textContent = secondNS2;
            document.getElementById("minute2").textContent = minuteNS2;
            document.getElementById("hour2").textContent = hourNS2;
        }, 1000)
    }
}
function reset(){
    ft.filter = "inherit";
    rt.filter = "inherit";
    const rebut = document.getElementById("reset").textContent;
    if(rebut == "一時停止"){
        const but = document.getElementById("button").textContent;
        if(but == focus){
            clearInterval(inter2);
        }else if(but == rest){
            clearInterval(inter1);
        }
        document.getElementById("reset").textContent = "リセット";
        document.getElementById("button").textContent = focus;
    }else if(rebut == "リセット"){
        document.getElementById("hour1").textContent = "00";
        document.getElementById("hour2").textContent = "00";
        document.getElementById("minute1").textContent = "00";
        document.getElementById("minute2").textContent = "00";
        document.getElementById("second1").textContent = "00";
        document.getElementById("second2").textContent = "00";
        document.getElementById("reset").remove();
        first = true;
    }
}
function openD(place){
    document.getElementById(place).style.display = "flex"
}
function closeD(place){
    if(place == "ham"){
        if(document.getElementById("save").style.display == "flex"){
            place = "save";
        }else{
            return;
        }
    }
    document.getElementById(place).style.display = "none";
}