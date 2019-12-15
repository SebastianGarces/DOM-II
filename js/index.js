// Your code goes here
const [
	navLinkHome,
	navLinkAbout,
	navLinkBlog,
	navLinkContact
] = document.querySelectorAll(".nav-link");

const navLinks = [navLinkHome, navLinkAbout, navLinkBlog, navLinkContact];
const navBar = document.querySelector(".nav");
const god = document.querySelector("*");

navBar.style.cssText = `height: 100%; align-items: center`;
navLinks.forEach(
	element => (element.style.cssText = "transition: all 200ms ease;")
);

navLinks.forEach(element =>
	element.addEventListener("mouseover", event => {
		event.stopPropagation();
		event.target.style.cssText = `
			background-color: rgba(100, 135, 245, 0.5); 
			transition: all 200ms ease; 
			height: 3rem;
			`;
	})
);

navLinks.forEach(element =>
	element.addEventListener("mouseout", event => {
		event.stopPropagation();
		event.target.style.transition = "all 200ms ease;";
		event.target.style.height = `16px`;
		event.target.style.backgroundColor = `transparent`;
	})
);

const header = document.querySelector("header");
header.style.zIndex = "500";
const footer = document.querySelector("footer");
const footerP = document.querySelector("footer p");
const body = document.querySelector("body");

const changingColors = (textColor, bgColor) => {
	body.style.cssText = "transition: all 200ms linear;";
	body.style.backgroundColor = bgColor;
	body.style.color = textColor;
	header.style.cssText = "transition: all 200ms linear;";
	header.style.backgroundColor = bgColor;
	footer.style.cssText = "transition: all 200ms linear;";
	footer.style.backgroundColor = bgColor;
	footerP.style.color = textColor;
	navLinks.forEach(element => (element.style.color = textColor));
	navLinks.forEach(element => (element.style.backgroundColor = bgColor));
	header.style.zIndex = "500";
};

navLinks.forEach(element => {
	element.addEventListener("click", event => {
		event.preventDefault();
		event.stopPropagation();

		switch (element) {
			case navLinkHome: {
				changingColors("#212529", "white");
				break;
			}
			case navLinkAbout: {
				changingColors("white", "rgb(182, 50, 50)");
				break;
			}
			case navLinkBlog: {
				changingColors("white", "orange");
				break;
			}
			case navLinkContact: {
				changingColors("#212529", "yellow");
				break;
			}
		}
		header.style.zIndex = "500";
	});
});

const images = document.querySelectorAll("img");

images.forEach(element => {
	element.addEventListener("mouseenter", () => {
		element.style.scale = "1.1";
		element.style.transition = "all 150ms ease-in";
		element.style.opacity = "1";
		header.style.zIndex = "500";
	});
});
images.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.scale = "1";
		element.style.transition = "all 150ms ease-in";
		setTimeout(() => {
			element.style.transform = "rotate(0deg)";
			element.style.transition = "all 300ms ease-in";
			header.style.zIndex = "500";
		}, 500);
	});
});

window.addEventListener("load", () => {
	images.forEach(element => {
		element.style.transition = "all 500ms ease-in";
		element.style.opacity = "0.8";
		header.style.zIndex = "500";
	});
});

images.forEach(element => {
	element.addEventListener("dblclick", event => {
		event.stopPropagation();
		element.style.transform = "rotate(-360deg)";
		element.style.transition = "all 500ms ease";
		header.style.zIndex = "500";
	});
});

const mainSections = document.querySelectorAll("section");
const homeContainer = document.querySelector(".home");

const popUp = document.createElement("div");
const popUpH1 = document.createElement("h1");
const popUpBtn = document.createElement("button");

popUpH1.textContent = "Where did everything go! ? ! ? ! ? !";
popUp.appendChild(popUpH1);
popUpBtn.style.cssText = `
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 45px;
	background-color: #17A2B8;
	color: #FFFFFF;
	border: 1px solid #C0C0C0;
	cursor: pointer;
	font-size: 1.8rem;
	margin: 4rem 0;
`;
popUpBtn.textContent = "Reset";
popUp.appendChild(popUpBtn);

window.addEventListener("resize", () => {
	mainSections.forEach(element => (element.style.display = "none"));
	[header, footer, homeContainer].forEach(
		element => (element.style.display = "none")
	);
	body.style.cssText = `
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	`;
	body.appendChild(popUp);
	popUp.style.cssText = `
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;
	popUpBtn.addEventListener("click", () => {
		mainSections.forEach(element => (element.style = ""));
		[header, footer, homeContainer, body].forEach(
			element => (element.style = "")
		);
		popUp.style.display = "none";
		header.style.zIndex = "500";
		changingColors("#212529", "white");
	});
});

document.addEventListener("keydown", () => {
	alert("Hello!");
});

window.addEventListener("scroll", () => {
	console.log("scrolling!");
});
