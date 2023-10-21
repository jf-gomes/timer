const audio = new Audio('audio.wav');
let finishButton = document.getElementById('finish-button');

function start(){
    let seconds = Number(document.querySelector('#seconds').value);
    let minutes = Number(document.querySelector('#minutes').value);
    let hours = Number(document.querySelector('#hours').value);

    if (!minutes && !seconds && !hours){
        window.alert('No time inserted.');
    } else{
        if (hours > 0 && minutes == 0){
            hours --;
            show('hours');
            minutes = 59;
            show('minutes');
            seconds = 59;
            show('seconds');
        }
        if (minutes > 0 && seconds == 0){
            minutes --;
            show('minutes');
            seconds = 59;
            show('seconds');
        }
        const countDown = setInterval(() => {
            seconds --;
            show('seconds');
            if (seconds == 0 && minutes > 0){
                minutes --;
                show('minutes');
                seconds = 59;
            } else if(seconds == 0 && minutes == 0){
                clearInterval(countDown);
                audio.play();
                finishButton.style.display = 'flex';
            }

            if (minutes == 0 && hours > 0){
                hours --;
                show('hours');
                minutes = 59;
                show('minutes');
            }
        }, 1000);
    }

    function show(x){
        switch (x){
            case 'seconds':
                document.querySelector('#seconds').value = seconds;
                break
            case 'minutes':
                document.querySelector('#minutes').value = minutes;
                break
            case 'hours':
                document.querySelector('#hours').value = hours;
        }
    }
}

function finish(){
    audio.pause();
    finishButton.style.display = 'none';
}