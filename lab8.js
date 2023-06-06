function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Дата и время для Русской локали: ' +  today.toLocaleString('ru-RU') + '<br>' 
    +'Дата и время для Португальской локали: ' +  today.toLocaleString('pt-PT') + '<br>'
    +'Дата и время для Турецкой локали: ' +  today.toLocaleString('tr-TR') + '<br>'
    +'Дата и время для Французской локали: ' +  today.toLocaleString('fr-FR') + '<br>'
    +'Дата и время для Китайской локали: ' +  today.toLocaleString('zh-HK') + '<br>'
    +'Дата и время для Украинской локали: ' +  today.toLocaleString('uk-UA') + '<br>'
    +'Дата и время для Узбекистанской локали: ' +  today.toLocaleString('uz-UZ') + '<br>'
    +'Дата и время для Египетской локали локали: ' +  today.toLocaleString('ar-EG');
}
setInterval(showDate, 1000);

function sDC() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('dr').innerHTML = "Количество дней с даты рождения: " + daysCount + ' дн.';
}

function deliteus() {
    document.getElementById('tablica').value = "";
    document.getElementById('dr').innerHTML="";
}

function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);