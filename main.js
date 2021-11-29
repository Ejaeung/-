$(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});
});

const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});