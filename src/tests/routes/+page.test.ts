import { describe, it, expect } from 'vitest';
import Page from '../../routes/+page.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';
import { profileLinks, projectLinks } from '$lib/data/links';

describe('Page Component', () => {
	it('should render the profile avatar with correct attributes', () => {
		render(Page);
		const avatar = screen.getByAltText('Picture of Ari');
		expect(avatar).toBeInTheDocument();
		expect(avatar).toHaveAttribute('src', 'Professional Profile Pic.jpg');
		const avatarRoot = avatar.closest('div');
		expect(avatarRoot).toHaveClass(
			'w-64',
			'h-64',
			'rounded-full',
			'object-cover',
			'border-accent',
			'border-4',
			'profile-border'
		);
	});
	it('should render social media links with correct attributes', () => {
		render(Page);
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
	it('should render heading and introduction text', () => {
		render(Page);
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toHaveTextContent("Hi, I'm Ari");
		const highlightedName = screen.getByText('Ari');
		expect(highlightedName).toHaveClass('text-accent');
		const intro = screen.getByText(/I'm a full-stack SWE/);
		expect(intro).toBeInTheDocument();
		expect(intro).toHaveClass('text-lg', 'font-bold', 'm-2');
	});
	it('should render project buttons with correct attributes', () => {
		render(Page);
		projectLinks.forEach((link) => {
			const button = screen.getByRole('link', { name: link.ariaLabel });
			expect(button).toHaveAttribute('href', link.url);
			expect(button).toHaveAttribute('target', '_blank');
			expect(button).toHaveAttribute('rel', 'noreferrer noopener');
			expect(button).toHaveClass('p-4', 'rounded-lg', 'text-base', 'font-bold', 'expand');
		});
	});
	it('should render main container with proper structure', () => {
		render(Page);
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
		const socialContainer = screen.getByLabelText('Links to social media profiles');
		expect(socialContainer).toHaveClass('flex', 'flex-row', 'justify-center', 'gap-0.5', 'my-6');
		const projectContainer = screen.getByLabelText('Links to projects');
		expect(projectContainer).toHaveClass(
			'flex',
			'flex-row',
			'justify-center',
			'gap-8',
			'mx-4',
			'my-2',
			'font-bold'
		);
	});
});
