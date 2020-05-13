const GetInfo = async function(url){
	let responce = await fetch(url);
	let comits = await responce.json();
	return comits;
	//https://api.openweathermap.org/data/2.5/weather?q=Kyiv&APPID=1e4c5456ddd367823b707047bd9635d2 погодное Api
}
async function Kurs(){
	let info = await GetInfo('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
	let elements = "";
	document.querySelector('body').innerHTML = '<div class="main_block"></div>';
	elements += `<div class="info">
			<div class="name">Валюта</div>
			<div class="buy">Купівля</div>
			<div class="sell">Продаж</div>
		</div>`;
	for(let elem of info){
		elements += `<div class="content">
		<div class="name">${elem.ccy}</div>
			<div class="buy">${elem.buy}</div>
			<div class="sell">${elem.sale}</div></div>`;
	}
	document.querySelector('.main_block').innerHTML = elements;
}

Kurs();
