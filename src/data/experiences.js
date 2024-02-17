import angular from "../assets/images/angular.png";
import bootstrap from "../assets/images/bootstrap.png";
import capi from "../assets/images/capi.png";
import css from "../assets/images/css.png";
import exp from "../assets/images/exp.png";
import html from "../assets/images/html.png";
import mongo from "../assets/images/mongo.png";
import node from "../assets/images/node.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import ts from "../assets/images/ts.png";

export const experiences = [
	{
		title: "frontend developer",
		description: `Worked on projects assigned by Banao Technologies, projects included Ecommerce websites, College helper websites, Assessment platform and others mostly in React also on Angular, understood client requirements and feedbacks and provided accordingly.
    Projects required tasks like Responsive web designs from scratch and also with frameworks like bootstrap and tailwind css, did Api integrations for api such as login,signup, CRUD apis, cart flow, blogs, and others, used Redux and context Api for state management and improving performance.
    Implemented features such as Payment Gateway integration, Google Maps api integration for location which further filtered a list of salons in an area for a project, Google analytics for a project having metrics like bounce rate, page views, active users etc.
    Drived the Design and Development of company’s  product website(Across the Globe) add on - Assessment Platform, mentored and worked with interns on this.It was made in React, Redux Toolkit, Bootstrap 5, Which also acted as a standalone platform for assessing the interns in the Internal Team.
    Provided Code reviews, mentored interns and collaborated with colleagues, have taken interviews for React and MERN internships.
    Backend : Worked on backend of Assessment platform made in Nodejs, Express, MongoDB.
    Made CRUD APIs questionbanks, questions, collections, attempts, evaluate.
    Used AWS S3 bucket for uploading files and images, also created internal service for handling this functionality.
    Made Api for Auto generation of emails for notification or information regarding assessment and its link.`,
		company: "[Banao Technologies, Across the Globe]",
		start: "Aug 2022",
		end: "Present",
		tech: [
			{ logo: react, name: "react" },
			{ logo: redux, name: "redux" },
			{ logo: capi, name: "capi" },
			{ logo: angular, name: "angular" },
			{ logo: node, name: "node js" },
			{ logo: exp, name: "express js" },
			{ logo: mongo, name: "mongo db" },
		],
	},
	{
		title: "frontend developer intern",
		description: `Worked on the company's own consultancy and services
    product developed in Angular, Typescript, Bootstrap.
    Built landing page, profile page for Mentor User, dynamic
    dashboard for all different types of users from figma designs.
    Developed new features like calendar from angular calendar
    library and video meetings from jitsi meet.
    Implemented forms within the application using angular formly
    library and data tables, dialog boxes with angular material.
    Tasks also included fixing bugs, refactoring existing components
    and adding global components.
    Collaborated with the team in an agile methodology
    environment.`,
		company: "foreignadmits",
		start: "Jan 2022",
		end: "Mar 2022",
		tech: [
			{ logo: ts, name: "typescript" },
			{ logo: angular, name: "angular" },
			{ logo: bootstrap, name: "bootstrap" },
			{ logo: html, name: "html" },
			{ logo: css, name: "css" },
		],
	},
	{
		title: "Team Leader",
		description: `Represented as Team Leader for a
    team of 30 members at the contest in
    ROBOCON-INDIA 2020. Our team got
    AIR-10 in 2018 and AIR-13 in 2020 out
    of around 107 teams from all around
    India`,
		company: "team robocon akgec (in college)",
		start: "May 2019",
		end: "May 2020",
		tech: [],
	},
];
