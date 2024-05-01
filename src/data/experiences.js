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
		title: "Software Developer",
		description: `•Played a pivotal role in the development of a salon-focused e-commerce platform, focusing on Redux Toolkit
		for frontend state management and ensuring backend architecture robustness and scalability.
		•Led the design and development of crucial features within a multitenant architecture application,
		emphasizing user management, revenue model implementation, and test-taking functionalities across
		frontend and backend system.
		•Contributed to the redevelopment of the Banao Tech Website by introducing new component designs,
		optimizing SEO strategies, and integrating a headless CMS Strapi for blog management within the Next.js
		framework.
		•Designed and architected an internal Assessment Platform (Learning Management System) from scratch for
		intern training purposes.
		•Implemented Serverless architecture with DynamoDB for cost-efficient and scalable operations in Nodejs
		project, reducing overhead and enabling seamless auto-scaling.
		•Facilitated project development by fostering collaboration with cross-functional teams, while concurrently
		providing mentorship to interns and conducting recruitment interviews. This comprehensive involvement
		ensured both project success and talent cultivation within the organization.`,
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
