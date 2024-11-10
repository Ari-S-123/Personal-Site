import type { Link } from '$lib/types/Link';

const githubLink: Link = {
	ariaLabel: 'Link to GitHub profile',
	url: 'https://github.com/Ari-S-123',
	iconPath: 'GitHub-Logo.png',
	iconAlt: 'GitHub Logo'
};
const linkedinLink: Link = {
	ariaLabel: 'Link to LinkedIn profile',
	url: 'https://www.linkedin.com/in/aritra-saharay',
	iconPath: 'LinkedIn-Logo.png',
	iconAlt: 'LinkedIn Logo'
};
const xLink: Link = {
	ariaLabel: 'Link to X profile',
	url: 'https://x.com/Ari_S_123',
	iconPath: 'X-Logo.png',
	iconAlt: 'X Logo'
};
const youtubeLink: Link = {
	ariaLabel: 'Link to YouTube channel',
	url: 'https://www.youtube.com/@Ari_S_123',
	iconPath: 'Youtube-Logo.png',
	iconAlt: 'Youtube Logo'
};

export const profileLinks: Link[] = [githubLink, linkedinLink, xLink, youtubeLink];
