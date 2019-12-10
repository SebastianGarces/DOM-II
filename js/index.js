// Your code goes here
const [
	navLinkHome,
	navLinkAbout,
	navLinkBlog,
	navLinkContact
] = document.querySelectorAll(".nav-link");

const navLinks = [navLinkHome, navLinkAbout, navLinkBlog, navLinkContact];
const navBar = document.querySelector(".nav");

navBar.style.cssText = `height: 100%; align-items: center`;

navLinks.forEach(element =>
	element.addEventListener("mouseover", event => {
		event.target.style.cssText = `background-color: rgba(100, 135, 245, 0.1); color: darkgray; transition: all 150ms ease`;
	})
);

navLinks.forEach(element =>
	element.addEventListener("mouseout", event => {
		event.target.style.cssText = `background-color: white; color: black; transition: all 150ms ease`;
	})
);
