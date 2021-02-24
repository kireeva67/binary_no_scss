let validletters = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя';


function remove_class(item, class_name){
			item.classList.remove(class_name);
		}
function set_on_click(item){
	item.onclick = () => {
		let filter_id = item.getAttribute('data-filter');
		console.log(item.getAttribute('data-filter'));
		if (filter_id == 1){
			let data =  document.querySelectorAll('.portfolio__column');
			for (ch=0; ch < data.length; ch++){
				data[ch].style.display = 'block';
			}
		}
		else{
			let data =  document.querySelectorAll('.portfolio__column');
			for (ch=0; ch < data.length; ch++){
				data[ch].style.display = 'none';
			}
			data =  document.querySelectorAll('.portfolio__column.f_' + `${filter_id}`);
			for (ch=0; ch < data.length; ch++){
				data[ch].style.display = 'block';
			}
		}
		let filter_items = document.querySelectorAll('.filter__item');
		for(ch=0; ch < filter_items.length; ch++){
			remove_class(filter_items[ch], 'active');
		}
		item.classList.add("active");

	}
}	
let filter_items = document.querySelectorAll('.filter__item');
for(ch=0; ch < filter_items.length; ch++){
	set_on_click(filter_items[ch]);
}

function addFocus(event){
	event.currentTarget.classList.add('focus');
}

function removeFocus(event){
	event.currentTarget.classList.remove('focus');
}

function submitForm(event){
	let email = event.target.elements.formEmail.value;
	let name = event.target.elements.formName.value;
	let text = event.target.elements.formText.value;
	let valid = true;
	let nameForm = event.target.elements.formName;
	let emailForm = event.target.elements.formEmail;
	let textarea = event.target.elements.formText;

	if(!validateName(name)){
		nameForm.classList.remove('focus');
		nameForm.classList.add('err');
		valid = false;
	}
	if(!validateEmail(email)){
		emailForm.classList.remove('focus');
		emailForm.classList.add('err');
		valid = false;
	}
	if(!validateTextarea(text)){
		textarea.classList.remove('focus');
		textarea.classList.add('err');
		valid = false;
	}
	return valid;
}



function validateName(name){
	name = name.toLowerCase();
	if(!name){
		return false;
	}
	for(ch = 0; ch < name.length; ch++){
		if(validletters.indexOf(name[ch]) === -1){
			return false;
		}
	}
	return true;
}

function validateEmail(email){
	if(email.indexOf('@') === -1){
		return false;
	}
	let parts = email.split('@');
	if(parts.length !== 2){
		return false;
	}
	if(parts[0].length < 1){
		return false;
	}
	if(parts[1].length < 3){
		return false;
	}
	let dotIndex = parts[1].indexOf('.');
	if(dotIndex === 0 || dotIndex === -1 || dotIndex === parts[1].length-1){
		return false;
	}
	return true;
}

function validateTextarea(text){
	if(text.length > 100){
		return false;
	}
	return true;
}


function scrollMe(){
	let scrollEl = document.getElementsByClassName('content')[0];
	var element = scrollEl;
	element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	return false;
}