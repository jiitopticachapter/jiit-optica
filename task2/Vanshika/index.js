setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hourRotation = 30*htime + mtime/2;
    minuteRotation = 6*mtime;
    secondRotation = 6*stime;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);