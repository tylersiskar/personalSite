import { mesunset } from './components';
const data = {
	home: [
		{
			name: "Bio",
			link: "/about"
		},
		{
			name: "Academia",
			link: "/academia"
		},
		{
			name: "Work",
			link: "/work"
		}
	],
	about: [
		{
			title: "About",
			img: mesunset,
			content: [
				{
					title: 'Bio',
					description: "Hello! My name is Tyler Siskar and I am a web / mobile developer in Buffalo, NY. I completed my undergraduate education at the University at Buffalo, where I studied Computational Physics. I initially pursued Physics as I was interested in astronomy and cosmology, but after taking several CS courses, I found that I was far more interested in computer science. Following graduation I stepped into a role as a developer and never looked back."
				},
				{
					description: "On this website you'll find more information from my time at University, and my project experience as a developer. Thank you for visiting!"
				}
			]
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
			],
			keyItems: "React, Redux, React Native, Gitlab, Strapi, Jenkins, Invision"
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
			],
			keyItems: "React, Redux, Firebase, Git, Productboard"
		},
		{
			title: "Work",
			place: "The Coder School",
			timeline: "December 2019 - June 2020",
			content: [
				{
					title: "Code Coach",
					description: `Taught students ages 6 through 18 in Python, HTML/CSS/JS, and Scratch in hour-long sessions. Outlines key coding concepts through development of a game or project.`
				}
			],
			keyItems: "Python, Scratch, HTML/CSS/JS"
		},
		{
			title: "Work",
			place: "Solo Projects",
			content: [
				{
					title: "tylersiskar.com",
					link: "http://tylersiskar.com",
					description: `Developed personal site using React, hosted by Amazon Web Services and Cloudfront, with continuous deployment service client Buddy. `
				},
				{
					title: "tcsiskar.com",
					link: "http://tcsiskar.com",
					description: `Developed another website in React that is hosted and deployed using Netlify. Data is fed through a content management service Contentful, and retrieved using Redux.`
				},
			],
			keyItems: "React, Redux, AWS, Netlify, Git, Contentful"
		}
	],
	academia: [
		{
			title: "Academia",
			place: "Education",
			timeline: "Fall 2015 - Spring 2019",
			content: [
				{
					title: 'University at Buffalo',
					description: "Bachelor of Science in Computational Physics, minor in Mathematics. Honors College Scholar."
				}, {
					title: "Universitie de technologie de Troyes",
					description: "6 week study abroad program based in Troyes, France. Took French, Engineering Statics, and World History."
				}
			],
			keyItems: "Data Structures and Algorithms, Software Engineering, Programming Languages"
		},
		{
			title: "Academia",
			place: "Research",
			timeline: "Spring 2017 - Spring 2019",
			content: [
				{
					title: 'Sensors and Microactuators Learning Lab (SMALL)',
					description: "Electrical Engineering resarch lab at the University at Buffalo, where topics of focus were in Microfluidics and creating realistic test phantoms."
				},
				{
					title: "Additive Manufacturing of Microfluidic ... Wax Extrusion",
					link: "https://briefs.techconnect.org/papers/additive-manufacturing-of-microfluidic-components-via-wax-extrusion/",
					description: "Paper published in Nanotech 2018, comparing the cross section and fluidic properties of a wax extrusion device and a computational model using FLOW3D to determine feasibility of creating Microfluidic devices. Created a poster and presented at research symposium."
				},
				{
					title: "Microfluidic Test Target for Photoacoustic Imaging",
					link: "https://briefs.techconnect.org/papers/microfluidic-test-target-for-photoacoustic-imaging/",
					description: "Paper published in Nanotech 2018, determining the potential of using microfluidic devices to replicate photoacoustic imaging of the Appendix F test target."
				}
			],
			keyItems: "MATLAB, Academic writing and presenting, profilometer measuring, silicon wafer cleaning and preparing"
		},
	],
};

export { data };