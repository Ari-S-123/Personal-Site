import { describe, it, expect } from 'vitest';
import Page from '../../routes/+page.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';

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
		const socialLinks = [
			{
				href: 'https://github.com/Ari-S-123',
				alt: 'GitHub Logo',
				src: 'GitHub-Logo.png'
			},
			{
				href: 'https://www.linkedin.com/in/aritra-saharay',
				alt: 'LinkedIn Logo',
				src: 'LinkedIn-Logo.png'
			},
			{
				href: 'https://x.com/Ari_S_123',
				alt: 'X Logo',
				src: 'X-Logo.png'
			},
			{
				href: 'https://www.youtube.com/@Ari_S_123',
				alt: 'Youtube Logo',
				src: 'Youtube-Logo.png'
			}
		];
		socialLinks.forEach((link) => {
			const button = screen.getByRole('link', { name: link.alt });
			expect(button).toHaveAttribute('href', link.href);
			expect(button).toHaveAttribute('target', '_blank');
			expect(button).toHaveAttribute('rel', 'noreferrer noopener');
			const img = screen.getByAltText(link.alt);
			expect(img).toHaveAttribute('src', link.src);
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
		const projectLinks = [
			{
				text: 'Dataviz Projects',
				href: 'https://observablehq.com/d/ae6c08dbf1f6a458'
			},
			{
				text: 'Public GitHub Projects',
				href: 'https://github.com/Ari-S-123?tab=repositories&q=&type=public&language=&sort=stargazers'
			}
		];
		projectLinks.forEach((link) => {
			const button = screen.getByRole('link', { name: link.text });
			expect(button).toHaveAttribute('href', link.href);
			expect(button).toHaveAttribute('target', '_blank');
			expect(button).toHaveAttribute('rel', 'noreferrer noopener');
			expect(button).toHaveClass(
				'p-4',
				'rounded-lg',
				'text-base',
				'font-bold',
				'shadow-lg',
				'hover:scale-105',
				'transition-transform',
				'duration-300'
			);
		});
	});
	it('should render main container with proper structure', () => {
		render(Page);
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
		const socialContainer = screen.getByRole('link', { name: 'GitHub Logo' }).closest('div');
		expect(socialContainer).toHaveClass('flex', 'flex-row', 'justify-center', 'gap-0.5', 'my-6');
		const projectContainer = screen.getByRole('link', { name: 'Dataviz Projects' }).closest('div');
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
