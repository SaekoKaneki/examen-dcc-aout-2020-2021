(function(){
    const oStopWatch={
        init(){
            this.eButtonStart = document.querySelector('.app__controls__start');
            this.eButtonTour = document.querySelector('.app__controls__lap')
            this.eTimer = document.querySelector('.app__timer');
            this.iSeconds = 0;
            this.iMinutes = 0;
            this.iMilliseconds = 0;
            this.intervalID = 0;
            this.iTour = 1;
            this.eButtonStart.addEventListener('click', () => {
                if (this.intervalID === 0) {
                    this.intervalID = setInterval(()=>{
                        this.iMilliseconds++;
                        this.eTimer.textContent = `${zero(this.iMinutes)}:${zero(this.iSeconds)}:${zero(this.iMilliseconds)}`;
                        if (this.iMilliseconds > 99) {
                            this.iMilliseconds = 0;
                            this.iSeconds++;
                        }
                        if (this.iSeconds > 59) {
                            this.iSeconds = 0;
                            this.iMinutes++;
                        }
                        if (this.iMinutes === 59 && this.iSeconds === 59 && this.iMilliseconds === 99) {
                            clearInterval(intervalID);
                            this.iMilliseconds = 0;
                            this.iMinutes = 0;
                            iMinutes = 0;
                        }
                    }, 10);
                    [this.eButtonStart.dataset.alternate, this.eButtonStart.textContent] = [this.eButtonStart.textContent, this.eButtonStart.dataset.alternate];
                    this.eButtonTour.textContent = 'Tour';
                    this.eButtonTour.dataset.alternate = 'Effacer';
                } else {
                    clearInterval(this.intervalID);
                    [this.eButtonStart.dataset.alternate, this.eButtonStart.textContent] = [this.eButtonStart.textContent, this.eButtonStart.dataset.alternate];
                    [this.eButtonTour.textContent, this.eButtonTour.dataset.alternate] = [this.eButtonTour.dataset.alternate, this.eButtonTour.textContent];
                    this.intervalID = 0
                }
            });
            this.eButtonTour.addEventListener('click', () => {
                document.querySelector('.app__laps').insertAdjacentHTML('beforeend', `
            <li class="app__lap">
             <span class="app__lap-count">Tour ${this.iTour}</span>
             <time class="app__lap-value" datatype="XX:YY:ZZ">${zero(this.iMinutes)}:${zero(this.iSeconds)}:${zero(this.iMilliseconds)}</time>
            </li>`);
                this.iTour++
                if (this.eButtonStart.textContent === 'Démarrer') {
                    document.querySelector('.app__laps').innerHTML = '';
                    this.iMilliseconds = 0;
                    this.iSeconds = 0;
                    this.iMinutes = 0;
                    this.iTour = 1;
                    this.eTimer.textContent = `${zero(this.iMinutes)}:${zero(this.iSeconds)}:${zero(this.iMilliseconds)}`;
                }
                    document.querySelector('.app__laps').scrollTop = document.querySelector('.app__laps').scrollHeight;
            });
            function zero(time) {
                if (time < 10) {
                    return `0${time}`
                } else {
                    return time
                }
            }
        }
    }
    oStopWatch.init();
})();





