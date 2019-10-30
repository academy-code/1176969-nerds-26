var d = document;
var modal = d.querySelector(".modal");
var button = d.querySelector(".contacts-block_button");
var close = d.querySelector(".modal-close");
var backModal = d.querySelector(".modal-backdrop");
var modalContent = d.querySelector(".modal-content");

var form = d.querySelector(".modal-form");
var buttonSubmit = d.querySelector(".modal-form_button_submit");
var inputName = d.querySelector(".modal-form .modal-form_name_input");
var inputEmail = d.querySelector(".modal-form .modal-form_email_input");
var inputText = d.querySelector(".modal-form .modal-form_text_input");


openModal();
closeModal();
sendForm();
addScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU");
setTimeout(readyMapAPI, 500);

function openModal() {
	button.addEventListener("click", function() {
		modal.style.display="flex";
		modalContent.classList.add("bounce-in-down");
		//console.log("открыть");
	});
};

function closeModal() {
	close.addEventListener("click", function() {
		modal.style.display="none";
		modalContent.classList.remove("bounce-in-down");
		//console.log("закрыть");
	});
	backModal.addEventListener("click", function() {
		modal.style.display="none";
		modalContent.classList.remove("bounce-in-down");
		//console.log("закрыть");
	});
};

function sendForm() {
	buttonSubmit.addEventListener("click", function() {
		if(inputName.value == "") {
			inputName.classList.add("error-value");
			modalContent.classList.add("shake");
			setTimeout(removeShake, 1000);
			inputName.onclick = function() {
				inputName.classList.remove("error-value");
			};
		} else if(inputEmail.value == "") {
			inputEmail.classList.add("error-value");
			setTimeout(removeShake, 1000);
			modalContent.classList.add("shake");
			inputEmail.onclick = function() {
				inputEmail.classList.remove("error-value");
			};
		} else if(inputText.value == "") {
			inputText.classList.add("error-value");
			setTimeout(removeShake, 1000);
			modalContent.classList.add("shake");
			inputText.onclick = function() {
				inputText.classList.remove("error-value");
			};
		}
	});
};

function removeShake() {
	modalContent.classList.remove("shake", "bounce-in-down");
};

function addScript(src){
	var script = d.createElement("script");
	script.src = src;
	script.async = false;
	d.body.append(script);
}

function readyMapAPI() {
	ymaps.ready(insertMap);
}

function insertMap() {
	myMap = new ymaps.Map("contacts-map", {
		center: [59.938631, 30.323055],
		zoom: 16,
		controls: ["zoomControl", "typeSelector", "rulerControl", "fullscreenControl"]
	})
	myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
		hintContent: "г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8"
	}, {
		iconLayout: "default#image",
		iconImageHref: "./images/map-marker.png",
		iconImageSize: [231, 190],
		iconImageOffset: [-50, -190]
	})
	myMap.geoObjects.add(myPlacemark);
};