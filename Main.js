const user = document.getElementById('user');
const user1 = document.getElementById('user-1');
const user2 = document.getElementById('user-2');
const user3 = document.getElementById('user-3');
const user4 = document.getElementById('user-4');
const task1 = document.getElementById('task-1');
const task2 = document.getElementById('task-2');
const task3 = document.getElementById('task-3');
const task4 = document.getElementById('task-4');
var cln;
const stagnant = document.getElementById('stagnant');
const inprocess = document.getElementById('inprocess');
const ready = document.getElementById('ready');
const onhold = document.getElementById('onhold');
const btnGroupDrop1 = document.getElementById('btnGroupDrop1');
const dropdownmenu = document.getElementById('dropdown-menu');
validate();
// status list
stagnant.addEventListener('click', (e) => {
	btnGroupDrop1.replaceWith(stagnant);
	dropdownmenu.style.display = 'none';
});

inprocess.addEventListener('click', (e) => {
	btnGroupDrop1.replaceWith(inprocess);
	dropdownmenu.style.display = 'none';
});

ready.addEventListener('click', (e) => {
	btnGroupDrop1.replaceWith(ready);
	dropdownmenu.style.display = 'none';
});

onhold.addEventListener('click', (e) => {
	btnGroupDrop1.replaceWith(onhold);
	dropdownmenu.style.display = 'none';
});

// validate null values ​​in localstorage.
function validate() {
	if (localStorage.getItem('task1') != null) {
		if (JSON.parse(localStorage.getItem('task1')) == 'user-1') {
			cln = user1.cloneNode(user1);
			task1.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task1')) == 'user-2') {
			cln = user2.cloneNode(user2);
			task1.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task1')) == 'user-3') {
			cln = user3.cloneNode(user3);
			task1.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task1')) == 'user-4') {
			cln = user4.cloneNode(user4);
			task1.replaceWith(cln);
		}
	}

	if (localStorage.getItem('task2') != null) {
		if (JSON.parse(localStorage.getItem('task2')) == 'user-1') {
			cln = user1.cloneNode(user1);
			task2.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task2')) == 'user-2') {
			cln = user2.cloneNode(user2);
			task2.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task2')) == 'user-3') {
			cln = user3.cloneNode(user3);
			task2.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task2')) == 'user-4') {
			cln = user4.cloneNode(user4);
			task2.replaceWith(cln);
		}
	}

	if (localStorage.getItem('task3') != null) {
		if (JSON.parse(localStorage.getItem('task3')) == 'user-1') {
			cln = user1.cloneNode(user1);
			task3.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task3')) == 'user-2') {
			cln = user2.cloneNode(user2);
			task3.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task3')) == 'user-3') {
			cln = user3.cloneNode(user3);
			task3.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task3')) == 'user-4') {
			task3.replaceWith(cln);
		}
	}

	if (localStorage.getItem('task4') != null) {
		if (JSON.parse(localStorage.getItem('task4')) == 'user-1') {
			cln = user1.cloneNode(user1);
			task4.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task4')) == 'user-2') {
			cln = user2.cloneNode(user2);
			task4.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task4')) == 'user-3') {
			cln = user3.cloneNode(user3);
			task4.replaceWith(cln);
		}

		if (JSON.parse(localStorage.getItem('task4')) == 'user-4') {
			cln = user4.cloneNode(user4);
			task4.replaceWith(cln);
		}
	}
}

// share information (id).
user.addEventListener('dragstart', (e) => {
	e.dataTransfer.setData('text/plain', e.target.id);
});

task1.addEventListener('dragover', (e) => {
	e.preventDefault();
});

task2.addEventListener('dragover', (e) => {
	e.preventDefault();
});

task3.addEventListener('dragover', (e) => {
	e.preventDefault();
});

task4.addEventListener('dragover', (e) => {
	e.preventDefault();
});
// get the item, clone, replace and save to localstorage.
task1.addEventListener('drop', (e) => {
	e.preventDefault();
	const element = document.getElementById(e.dataTransfer.getData('text'));
	cln = element.cloneNode(element);
	task1.replaceWith(cln);
	localStorage.setItem('task1', JSON.stringify(e.dataTransfer.getData('text')));
});

task2.addEventListener('drop', (e) => {
	e.preventDefault();
	const element = document.getElementById(e.dataTransfer.getData('text'));
	cln = element.cloneNode(element);
	task2.replaceWith(cln);
	localStorage.setItem('task2', JSON.stringify(e.dataTransfer.getData('text')));
});

task3.addEventListener('drop', (e) => {
	e.preventDefault();
	const element = document.getElementById(e.dataTransfer.getData('text'));
	cln = element.cloneNode(element);
	task3.replaceWith(cln);
	localStorage.setItem('task3', JSON.stringify(e.dataTransfer.getData('text')));
});

task4.addEventListener('drop', (e) => {
	e.preventDefault();
	const element = document.getElementById(e.dataTransfer.getData('text'));
	cln = element.cloneNode(element);
	task4.replaceWith(cln);
	localStorage.setItem('task4', JSON.stringify(e.dataTransfer.getData('text')));
});
