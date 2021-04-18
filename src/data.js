import { mesunset, vz, ferriswheel } from './components';
const data = {
	home: [
		{
			name: "About",
			link: "/about"
		},
		{
			name: "Work",
			link: "/work"
		},
		{
			name: "Interests",
			link: "/interests"
		}
	],
	about: [
		{
			title: "About",
			img: mesunset,
			content: "Born and raised in Buffalo, NY and continuing my education at the University at Buffalo in Computational Physics. I have always been interested in problems solving, and during my time at UB, I found that I specifically enjoyed computer science courses and the projects that went along with them. Following my graduation in May 2019, I stepped into a role as a Developer and never looked back. In the last two years, I have obsessively worked on my craft to become the best web developer I can be. On this site, you will learn of the projects I've worked on, both professionally and personally, and some fun facts from my life. Hope you enjoy!"
		}
	],
	work: [
		{
			title: "Experience",
			place: "Mean Guppy",
			timeline: "June 2019 - Present",
			content: [
				{
					title: "Verizon Design System",
					description: `Atomically designed web component library built with React framework, currently used in Verizon’s websites.\nBuilds web components to design specifications, refactors and debugs existing components to maintain backwards compatibility.`
				},
				{
					title: "VDS - Documentation Site",
					description: `Website built in React to display developer and design documentation of the Verizon Design System library. Data is fed through Strapi and connected using Hooks and Redux.`
				},
			]
		},
		{
			title: "Work",
			place: "Finta",
			timeline: "November 2019 - Present",
			content: [
				{
					title: "Finta Web App",
					description: `React application that facilitates the fundraising / investing process between startups and investors.\nDesigns and develops new features to improve the user experience and improve functionality of the app.\nUsing OpenAI’s GPT-3 API, created a personalized email generator from founders to investors.`
				}
			]
		},
		{
			title: "Work",
			place: "Solo Projects",
			content: [
				{
					title: "tylersiskar.com",
					addLink: true,
					description: `Developed personal site using React, hosted by Amazon Web Services and Cloudfront, with continuous deployment service client Buddy. `
				},
				{
					title: "tcsiskar.com",
					addLink: true,
					description: `Developed another website in React that is hosted and deployed using Netlify. Data is fed through a content management service Contentful, and retrieved using Redux.`
				},
			]
		}
	],
	interests: [
		{
			title: "Interests",
			img: ferriswheel,
			content: "Born and raised in Buffalo, NY and continuing my education at the University at Buffalo in Computational Physics. I have always been interested in problems solving, and during my time at UB, I found that I specifically enjoyed computer science courses and the projects that went along with them. Following my graduation in May 2019, I stepped into a role as a Developer and never looked back. In the last two years, I have obsessively worked on my craft to become the best web developer I can be. On this site, you will learn of the projects I've worked on, both professionally and personally, and some fun facts from my life. Hope you enjoy!"
		}
	],
};

export { data };