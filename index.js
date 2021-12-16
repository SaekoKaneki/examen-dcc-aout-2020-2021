// Nom    :BATTA
// Prénom : Gwenaelle
// Groupe : 2285
const eTimer = document.querySelector('.app__timer');
const eButtonStop = document.querySelector('.app__controls__start');
const eButtonTour = document.querySelector('.app__controls__lap');
const eAppLap = document.querySelector('.app__laps');
let iSecond =0;
let iMinutes = 0;
let iMillisecond=0;
let intervalID = 0;
let iTour=1;
function zero (time){
    if(time<10){
        return `0${time}`;
    }else{
        return time;
    }
    //return `${time}<10? '0' : `${time}`
    //retrun `${time}`.padStart(2,'0');
}
eButtonStop.addEventListener('click',(event)=>{
    if(intervalID === 0) {
        intervalID = setInterval(upDate, 10);
        [eButtonStop.textContent, eButtonStop.dataset.alternate] =[eButtonStop.dataset.alternate, eButtonStop.textContent];
        eButtonTour.textContent = "Tour";
        eButtonTour.dataset.alternate = "Effacer";
    }
    else{
        clearInterval(intervalID);
        intervalID = 0;
        [eButtonStop.dataset.alternate, eButtonStop.textContent] =  [eButtonStop.textContent, eButtonStop.dataset.alternate]; //PHASE STOP
        [eButtonTour.dataset.alternate, eButtonTour.textContent] =  [eButtonTour.textContent, eButtonTour.dataset.alternate];
     }

})
eButtonTour.addEventListener('click',(event)=>{
     if(eButtonStop.textContent ==='Stop'){
         document.querySelector('.app__laps').insertAdjacentHTML("beforeend",`<li class="app__lap"><span class="app__lap-count">Tour ${iTour} </span> <time class="app__lap-value" datatype="XX:YY:ZZ">${zero(iMinutes)}:${zero(iSecond)}:${zero(iMillisecond)}</time></li>`);
         iTour++;
     }
    if (eButtonTour.textContent ==='Effacer'){
        document.querySelector('.app__laps').innerHTML="";
        //document.querySelector('.app__laps').remove("");
        iSecond =0;
        iMinutes = 0;
        iMillisecond = 0;
        iTour=1;
        eTimer.textContent = `${zero(iMinutes)}:${zero(iSecond)}:${zero(iMillisecond)}`;
    }
});
eAppLap.addEventListener('scroll', (event)=>{
    if (iTour>5){

    }
})
function upDate() {
    iMillisecond++
    eTimer.textContent = `${zero(iMinutes)}:${zero(iSecond)}:${zero(iMillisecond)}`;
    if(iMillisecond>99){
        iMillisecond=0;
        iSecond++;
    }if(iSecond>59){
        iSecond=0;
        iMinutes++;
    }if(iMinutes===99 && iSecond===59 && iMillisecond===99){
        clearInterval(intervalID);
    }
}











