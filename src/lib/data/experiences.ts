import type { Experience } from '$lib/types/Experience';
import {
	react,
	typeScript,
	reactTestingLibrary,
	mui,
	jest,
	css,
	html,
	javaScript,
	reactNative
} from '$lib/data/tools';

const ner: Experience = {
	title: 'Software Group Lead/Developer',
	organization: 'Northeastern Electric Racing',
	description: [
		'Developed FinishLine, a project management web app to heighten the efficiency of Northeastern University’s title-winning electric racing team in the SAE Formula Hybrid+Electric Series.',
		'Managed developer workflow through the Agile framework and mentored over a dozen developers by assisting them with blockers and overseeing their progress and growth.',
		'Implemented a Gantt Chart Visualization with built-in filters to efficiently display 80+ unique projects with hundreds of individual work packages to boost the productivity of 200+ engineers.',
		'Engineered dozens of bespoke front-end components to improve the user experience for 200+ users.'
	],
	startDate: 'September 2021',
	endDate: 'April 2023',
	techStack: [react, typeScript, javaScript, mui, css, html, jest, reactTestingLibrary]
};

const lexiaLearning: Experience = {
	title: 'Software Engineering Co-op',
	organization: 'Lexia Learning',
	description: [
		"Engineered and refactored front-end components to improve the user experience for millions of students and tens of thousands of teachers on Lexia Learning's Core5 Web and iPad English literacy learning program.",
		'Enhanced A11y compliance by implementing alt text for images to enhance the user experience for thousands of visually impaired children who require screen readers.',
		'Advanced the implementation of new Skill Check features to better facilitate the appraisal of learners’ progress by educators.'
	],
	startDate: 'July 2022',
	endDate: 'December 2022',
	techStack: [react, reactNative, typeScript, javaScript, css, html, jest, reactTestingLibrary]
};

export const experiences: Experience[] = [lexiaLearning, ner];
