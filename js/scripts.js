function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var time =
        '<div class="tarcza zaokTOP zaokBOTTOM blush">'+h+'</div>:<div class="tarcza zaokTOP zaokBOTTOM blush">'+m+'</div>:<div class="tarcza zaokTOP zaokBOTTOM blush">'+s+'</div>'
    document.getElementById('zegar').innerHTML = time;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}