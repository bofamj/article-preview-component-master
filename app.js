const btn = document.getElementById('btn');
const social = document.querySelector('.social');
//const socialShow = document.querySelector('.socialShow');

btn.addEventListener('click', () => {
	social.classList.toggle('socialShow');
});
