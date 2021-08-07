const menu = document.querySelector('.menu');
const btnON = document.querySelector('.ON');
const btnOFF = document.querySelector('.OFF');
const overlay = document.querySelector('.overlay');

btnON.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});

btnOFF.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});
overlay.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});

const sectionts = document.querySelector('.menu ul');

sectionts.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});