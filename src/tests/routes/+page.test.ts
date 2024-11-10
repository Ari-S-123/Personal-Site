import { describe, it, expect, beforeAll, vi } from 'vitest';
import Page from '../../routes/+page.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';
import { profileLinks } from '$lib/data/links';
import { webDevProjects, dataVizProjects } from '$lib/data/projects';
import { experiences } from '$lib/data/experiences';

beforeAll(() => {
	globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn()
	}));
});

describe('Profile Card', () => {
	it('should render the profile avatar with correct attributes', () => {
		render(Page);
		const avatarContainer = screen.getByLabelText('Picture of Website Author');
		expect(avatarContainer).toHaveClass(
			'h-72',
			'w-72',
			'rounded-full',
			'object-cover',
			'border-accent',
			'border-4',
			'profile-border',
			'self-center'
		);
		const avatar = screen.getByAltText('Picture of Ari');
		expect(avatar).toBeInTheDocument();
		expect(avatar).toHaveAttribute('src', 'Professional Profile Pic.jpg');
	});
	it('should render name and role', () => {
		render(Page);
		expect(screen.getByText('Ari S.')).toHaveClass('text-4xl', 'text-white', 'font-bold');
		const role = screen.getByText('Student & Fullstack SWE');
		expect(role).toHaveClass('text-2xl', 'text-white');
		expect(role.tagName).toBe('B');
	});
	it('should render social media links with correct attributes', () => {
		render(Page);
		const socialContainer = screen.getByLabelText('Links to social media profiles');
		expect(socialContainer).toHaveClass(
			'flex',
			'flex-row',
			'items-center',
			'justify-between',
			'gap-0.5',
			'my-6'
		);
		profileLinks.forEach((link) => {
			const button = screen.getByRole('link', { name: link.ariaLabel });
			expect(button).toHaveAttribute('href', link.url);
			expect(button).toHaveAttribute('target', '_blank');
			expect(button).toHaveAttribute('rel', 'noreferrer noopener');
			const img = screen.getByAltText(link.iconAlt);
			expect(img).toHaveAttribute('src', link.iconPath);
			expect(img).toHaveClass('profile-links', 'expand');
		});
	});
});

describe('Experience Section', () => {
	it('should render experiences section with correct heading', () => {
		render(Page);
		const experiencesHeading = screen.getByRole('heading', { name: 'Experiences' });
		expect(experiencesHeading).toHaveClass('mb-4', 'text-xl', 'font-bold', 'leading-none');
	});
	it('should render all experiences with separators', () => {
		render(Page);
		experiences.forEach((experience) => {
			expect(
				screen.getByText(`${experience.title} @ ${experience.organization}`)
			).toBeInTheDocument();
			expect(
				screen.getByText(`${experience.startDate} - ${experience.endDate}`)
			).toBeInTheDocument();
		});
		const separators = screen.getAllByTestId('experience-separator');
		expect(separators).toHaveLength(experiences.length);
	});
});

describe('Projects Sections', () => {
	it('should render web dev projects section with correct heading', () => {
		render(Page);

		const webDevHeading = screen.getByRole('heading', { name: 'Web Dev Projects' });
		expect(webDevHeading).toHaveClass('mb-4', 'text-xl', 'font-bold', 'leading-none');
	});
	it('should render all web dev projects with separators', () => {
		render(Page);
		webDevProjects.forEach((project) => {
			expect(screen.getByText(project.name)).toBeInTheDocument();
			expect(screen.getByText(project.description)).toBeInTheDocument();
		});
		const separators = screen.getAllByTestId('web-dev-separator');
		expect(separators).toHaveLength(webDevProjects.length);
	});
	it('should render data viz projects section with correct heading', () => {
		render(Page);
		const dataVizHeading = screen.getByRole('heading', { name: 'DataViz Projects' });
		expect(dataVizHeading).toHaveClass('mb-4', 'text-xl', 'font-bold', 'leading-none');
	});
	it('should render all data viz projects', () => {
		render(Page);
		dataVizProjects.forEach((project) => {
			expect(screen.getByText(project.name)).toBeInTheDocument();
			expect(screen.getByText(project.description)).toBeInTheDocument();
		});
		const separators = screen.getAllByTestId('dataviz-separator');
		expect(separators).toHaveLength(dataVizProjects.length);
	});
});

describe('Layout Structure', () => {
	it('should render main container with proper structure', () => {
		render(Page);
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
		const container = main.firstElementChild;
		expect(container).toHaveClass(
			'flex',
			'flex-row',
			'items-center',
			'justify-start',
			'gap-2',
			'flex-wrap'
		);
	});
	it('should render scroll areas with correct attributes', () => {
		render(Page);
		const scrollAreas = screen.getAllByTestId('Scroll Area');
		expect(scrollAreas).toHaveLength(3);
		scrollAreas.forEach((area) => {
			expect(area.querySelector('.p-4')).toBeInTheDocument();
		});
	});
});
