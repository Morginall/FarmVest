
// B*U*R*G*E*R
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__content,.header__logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//=================Спойлер
$(document).ready(function () {
	$('.spoilers-pathway__title').click(function (event) {
		//Тільки одне вікно відкрите
		if ($('.spoilers-pathway__list').hasClass('one')) {
			$('.spoilers-pathway__title').not($(this)).removeClass('active');
			$('.spoilers-pathway__text').not($(this).next()).slideUp(300);
		}
		//Сам механізм спойлеру
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
//=================Параллакс
$(document).ready(function () {
	$('.decor-main>span').addClass('layer');
	$('.header__logo>span').addClass('layer');
	$('.decor-main').parallax();
	$('.header__logo').parallax();
});
//========Зміна Кольорової палітри сайту
"use strict"
window.addEventListener("load", windowLoad);

function windowLoad() {
	//HTML
	const htmlBlock = document.documentElement;

	//Отримуємо збережену тему
	const saveUserTheme = localStorage.getItem('user-theme');

	//Робота з системними налаштуваннями
	let UserTheme;
	if (window.matchMedia) {
		UserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		!saveUserTheme ? changeTheme() : null;
	});

	//Зміна теми по кліку
	const themeButton = document.querySelector('.main__theme');
	const resetButton = document.querySelector('.main__reset');

	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			resetButton.classList.add('active');
			changeTheme(true);
		});
	}
	if (resetButton) {
		resetButton.addEventListener("click", function (e) {
			resetButton.classList.remove('active');
			localStorage.setItem('user-theme', '');
		});
	}

	//Функція додавання класу теми
	function setThemeClass() {
		if (saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme);
			resetButton.classList.add('active');
		} else {
			htmlBlock.classList.add(UserTheme);
		}

	}
	//Додаємо класс теми
	setThemeClass();

	//Функція зміни теми
	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = "light";
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}
