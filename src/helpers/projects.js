import p11 from "../imgs/p11.jpeg";
import p21 from "../imgs/p21.jpeg";
import p31 from "../imgs/p31.jpeg";
import js from "../imgs/js.png";
import redux from "../imgs/redux.png";
import bootstrap from "../imgs/bootstrap.png";
import tcss from "../imgs/tcss.png";
import capi from "../imgs/capi.png";
import react from "../imgs/react.png";
import mui from "../imgs/mui.png";
import firebase from "../imgs/firebase.png";

export const projects = [
  {
    name: "discord-like",
    image: `${p11}`,
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
    name: "task-board",
    image: `${p21}`,
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
    name: "todo-x-list",
    image: `${p31}`,
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
];
