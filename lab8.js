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
    +'Дата и время для Египетской локали локали: ' +  today.toLocaleString('ar-EG')
}
