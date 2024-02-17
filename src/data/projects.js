import bootstrap from "../assets/images/bootstrap.png";
import capi from "../assets/images/capi.png";
import css from "../assets/images/css.png";
import firebase from "../assets/images/firebase.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import mui from "../assets/images/mui.png";
import p13 from "../assets/images/p13.jpeg";
import p22 from "../assets/images/p22.jpeg";
import p32 from "../assets/images/p32.jpeg";
import p41 from "../assets/images/p41.jpeg";
import p51 from "../assets/images/p51.jpeg";
import p61 from "../assets/images/p61.jpeg";
import p71 from "../assets/images/p71.jpeg";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import tcss from "../assets/images/tcss.png";

export const projects = [
	{
		name: "discord-like",
		image: `${p13}`,
		description: `A Discord Like Single page Web-App developed in React and MUI
    for sharing thoughts in different servers and channels, State
    management is done with context api, Authentication with
    Firebase google auth and database built in Firestore.`,
		url: "https://discord-like.netlify.app/",
		repoUrl: "https://github.com/kp0604/chat-in",
		tech: [
			{ logo: js, name: "javascript" },
			{ logo: react, name: "react" },
			{ logo: firebase, name: "firebase" },
			{ logo: mui, name: "material-ui" },
			{ logo: capi, name: "context-api" },
		],
	},
	{
		name: "portfolio website",
		image: `${p51}`,
		description: `A Portfolio Website made in Reactjs to showcase my Skills, Projects, Experience, Etc. Material-Ui is used for styling.`,
		url: "https://portfolio-kartikeya.netlify.app/",
		repoUrl: "https://github.com/kp0604/portfolio",
		tech: [
			{ logo: js, name: "javascript" },
			{ logo: react, name: "react" },
			{ logo: mui, name: "material-ui" },
		],
	},
	{
		name: "task-board",
		image: `${p22}`,
		description: `It is a Single Page Web-App which is for managing tasks with
    subtasks and segregated task lists according to status change of
    completion, Redux is used for state management and tasks are
    saved in Local Storage.
    `,
		url: "https://taskxboard.netlify.app/",
		repoUrl: "https://github.com/kp0604/task-manager",
		tech: [
			{ logo: js, name: "javascript" },
			{ logo: react, name: "react" },
			{ logo: redux, name: "redux" },
			{ logo: bootstrap, name: "bootstrap" },
		],
	},
	{
		name: "dummy-friends",
		image: `${p41}`,
		description: `It is a Single page Web-App in which random users are fetched from api on click and can be added to
friends list with CRUD function like dating apps. Friends are stored and retrieved from Local Storage.
    `,
		url: "https://dummy-friends.netlify.app/",
		repoUrl: "https://github.com/kp0604/Dummy-Friends",
		tech: [
			{ logo: js, name: "javascript" },
			{ logo: react, name: "react" },
			{ logo: css, name: "css" },
		],
	},
	{
		name: "todo-x-list",
		image: `${p32}`,
		description: `It is a simple todo list Single Page Web-App for managing todo
    tasks , custom self-made Login and Register feature is provided,
    Redux is used for state management and Tailwind-css is used for
    styling.`,
		url: "https://todo-x-list.herokuapp.com/",
		repoUrl: "https://github.com/kp0604/todo",
		tech: [
			{ logo: js, name: "javascript" },
			{ logo: react, name: "react" },
			{ logo: redux, name: "redux" },
			{ logo: tcss, name: "tailwind-css" },
		],
	},
	{
		name: "diginotes",
		image: `${p71}`,
		description: `Diginotes is a note taking app...Built with Responsive and Mobile first approach...Created in HTML, CSS, Javascript...
Bootstrap 5.0.0 is used for Styling and Design...Local Storage API is used as Database...`,
		url: "https://diginotes.netlify.app/",
		repoUrl: "https://github.com/kp0604/Diginotes",
		tech: [
			{ logo: js, name: "javascript" },
			{ logo: html, name: "html5" },
			{ logo: css, name: "css3" },
			{ logo: bootstrap, name: "bootstrap" },
		],
	},
	{
		name: "landing-page",
		image: `${p61}`,
		description: `It is a Simple landing page design for the Restaurant, made in Reactjs and styled with CSS3 from scratch.`,
		url: "https://restaurant-landing-page1.netlify.app/",
		repoUrl: "https://github.com/kp0604/Restaurant_landing_page",
		tech: [
			{ logo: js, name: "javascript" },
			{ logo: react, name: "react" },
			{ logo: css, name: "css" },
		],
	},
];
