const headerNavBarBtn = document.getElementById('headerNavBarBtn');
const headerNavBarContainer = document.getElementById('headerNavBarContainer');

let isNavMenuOpen = false;

headerNavBarBtn.addEventListener('click', () => {
	headerNavBarContainer.classList.toggle('nav-menu-opened');
	isNavMenuOpen = !isNavMenuOpen;

	if (isNavMenuOpen) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}

	if (headerNavBarContainer.classList.contains('nav-menu-opened')) {
		headerNavBarBtn.classList.add('fa-xmark');
		headerNavBarBtn.classList.remove('fa-bars');
		headerNavBarBtn.style.transitionDelay = '.35s';
	} else {
		headerNavBarBtn.classList.remove('fa-xmark');
		headerNavBarBtn.classList.add('fa-bars');
	}
});

// Add event listeners for the touchmove and wheel events
window.addEventListener(
	'touchmove',
	(e) => {
		if (isNavMenuOpen) {
			e.preventDefault();
		}
	},
	{ passive: false },
);

window.addEventListener(
	'wheel',
	(e) => {
		if (isNavMenuOpen) {
			e.preventDefault();
		}
	},
	{ passive: false },
);

const headerNavBarLinks = document.querySelectorAll('#headerNavBarLink');

headerNavBarLinks.forEach((headerLink) => {
	headerLink.addEventListener('click', () => {
		headerNavBarContainer.classList.toggle('nav-menu-opened');
		headerNavBarBtn.classList.remove('fa-xmark');
		headerNavBarBtn.classList.add('fa-bars');

		headerNavBarLinks.forEach((link) => {
			if (
				link !== headerLink &&
				link.classList.contains('currentlyActive')
			) {
				link.classList.remove('currentlyActive');
			}
		});

		headerLink.classList.toggle('currentlyActive');
	});
});

// Getting elements from the DOM
const switchEl = document.getElementById('mode-switch');
const bodyEl = document.body;
const themeIcon = document.getElementById('theme-icon');
const themeSwitchToolTip = document.getElementById('theme-switch-tooltip');

// Function to set the theme of the body element
const setBodyTheme = (mode) => {
	bodyEl.classList.remove('light', 'dark'); // Remove any existing theme classes
	bodyEl.classList.add(mode); // Add the new theme class
	localStorage.setItem('theme', mode); // Save the theme to local storage
	switchEl.checked = mode === 'dark' ? true : false; // Update the switch state

	if (mode === 'dark') {
		themeIcon.classList.add('bi-moon'); // Change the theme icon to moon
		themeIcon.classList.remove('bi-sun'); // Remove the sun icon
		themeSwitchToolTip.innerText = 'Switch to light mode'; // Update the tooltip text
	} else {
		themeIcon.classList.add('bi-sun'); // Change the theme icon to sun
		themeIcon.classList.remove('bi-moon'); // Remove the moon icon
		themeSwitchToolTip.innerText = 'Switch to dark mode'; // Update the tooltip text
	}
};

// Function to get the current theme from local storage
const getBodyTheme = () => localStorage.getItem('theme') || 'light';

// Function to initialize the theme
const initTheme = () => {
	const bodyTheme = getBodyTheme();
	if (bodyTheme === 'light' || bodyTheme === 'dark') {
		setBodyTheme(bodyTheme);
	} else {
		setBodyTheme('light');
	}
	switchEl.checked = bodyTheme === 'dark' ? true : false;
};

// Event listener for theme change
bodyEl.addEventListener('themeChange', () => {
	const bodyTheme = getBodyTheme();
	if (bodyTheme === 'dark') {
		themeIcon.classList.add('bi-moon');
		themeIcon.classList.remove('bi-sun');
		themeSwitchToolTip.innerText = 'Switch to light mode';
	} else {
		themeIcon.classList.add('bi-sun');
		themeIcon.classList.remove('bi-moon');
		themeSwitchToolTip.innerText = 'Switch to dark mode';
	}
});

// Event listener for theme switch change
switchEl.addEventListener('change', () => {
	if (switchEl.checked) {
		setBodyTheme('dark');
	} else {
		setBodyTheme('light');
	}
});

// Initialize the theme
initTheme();

// Dispatch a theme change event
bodyEl.dispatchEvent(new Event('themeChange'));








const loaderWrapper = document.getElementById('loader-wrapper');
const loader = document.getElementById('loader');

window.addEventListener('DOMContentLoaded', () => {
	loaderWrapper.classList.add('loaded');
	loader.classList.add('loaded');
	// alert("DOM is loaded");
});

// Listen for the transitionend event on the loader element
loaderWrapper.addEventListener('transitionend', () => {
	loaderWrapper.parentNode.removeChild(loaderWrapper);
});








const topButton = document.getElementById('top-btn');

topButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 1500) {
		topButton.style.transform = 'translateX(0)';
	} else {
		topButton.style.transform = 'translateX(200%)';
	}
});






const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', () => {
	// Copy the text to clipboard
	const success = copyToClipboard('essiencatherine1@gmail.com');
	if (success) {
		// Change the inner text to "copied"
		copyBtn.innerText = 'copied!';

		// Clear the message after 2 seconds
		setTimeout(() => {
			copyBtn.innerText = 'copy';
		}, 2000);
	}
});

function copyToClipboard(text) {
	// Create a new text input element
	const input = document.createElement('input');
	input.value = text;

	// Add the input to the document
	document.body.appendChild(input);

	// Select the text in the input
	input.select();

	// Copy the text to clipboard
	const result = document.execCommand('copy');

	// Remove the input from the document
	document.body.removeChild(input);

	return result;
}





const yearPlaceholder = document.getElementById('year');

let currentYear = new Date().getFullYear();
yearPlaceholder.innerText = currentYear;






// ScrollReveal().reveal(`.hero-image`, {
// 	origin: 'right',
// 	delay: 500,
// 	distance: '35px',
// 	easing: 'ease',
// 	interval: 100,
// });

// ScrollReveal().reveal(`.hero-heading, .hero-subheading`, {
// 	origin: 'left',
// 	delay: 500,
// 	distance: '35px',
// 	easing: 'ease',
// });

// ScrollReveal().reveal(`.hero-btns-container`, {
// 	origin: 'right',
// 	delay: 500,
// 	distance: '35px',
// 	easing: 'ease',
// 	interval: 200,
// });

ScrollReveal().reveal(`.work-heading-container`, {
	origin: 'left',
	delay: 500,
	distance: '35px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.work-project-list1`, {
	origin: 'right',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.work-project-list2`, {
	origin: 'left',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.work-project-list3`, {
	origin: 'right',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.work-project-list4`, {
	origin: 'left',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.view-more-projects-btn`, {
	origin: 'bottom',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.about-text-container`, {
	origin: 'left',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.profile-image`, {
	origin: 'right',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

ScrollReveal().reveal(`.contact`, {
	origin: 'left',
	delay: 500,
	distance: '40px',
	easing: 'ease',
	viewFactor: 0.2,
});

// // ScrollReveal().reveal(`footer`, {
// // 	origin: 'bottom',
// // 	delay: 500,
// // 	distance: '40px',
// // 	easing: 'ease',
// // 	viewFactor: .2,
// // });
