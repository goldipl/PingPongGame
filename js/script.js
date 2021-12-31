const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startElement = document.getElementById('start');

minutesElement.value = 0;
secondsElement.value = 0;

disabledInterface = () => {
    minutesElement.setAttribute('disabled', 'yes');
    secondsElement.setAttribute('disabled', 'yes');
    startElement.setAttribute('disabled', 'yes');
};

undisabledInterface = () => {
    minutesElement.removeAttribute('disabled');
    secondsElement.removeAttribute('disabled');
    startElement.removeAttribute('disabled');
};

start = () => {

    disabledInterface();

    let seconds = Number(minutesElement.value) * 60 + Number(secondsElement.value);
    //2nd version
    //let seconds = parseInt(minutesElement.value) * 60 + parseInt(secondsElement.value);

    const intervalRef = setInterval(() => {
        if (seconds === 0) {
            clearInterval(intervalRef);
            undisabledInterface();
        } else {
            seconds -= 1;
            minutesElement.value = Math.floor(seconds / 60);
            secondsElement.value = Math.floor(seconds % 60);
        }
    }, 1000);
}

startElement.addEventListener('click', start);