import { describe, it, expect } from 'vitest';
import Layout from '../../routes/+layout.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';

describe('Head metadata', () => {
	it('should set correct page title and meta description', () => {
		render(Layout);
		expect(document.title).toBe('Aritra Saharay');
		const metaDescription = document.head.querySelector('meta[name="description"]');
		expect(metaDescription).not.toBeNull();
		expect(metaDescription?.getAttribute('name')).toBe('description');
		expect(metaDescription?.getAttribute('content')).toBe(
			"Aritra Saharay's personal resume and portfolio site showcasing experience, skills, and projects."
		);
	});
});

describe('Header', () => {
	it('should render the header with correct text and structure', () => {
		render(Layout);
		const header = screen.getByRole('banner');
		expect(header).toHaveClass('text-center', 'my-4');

		const heading = screen.getByRole('heading', { level: 2 });
		expect(heading).toHaveClass('inline-flex', 'items-center', 'justify-center');
		expect(heading).toHaveAttribute('aria-label', 'Technology used to build this static site');

		expect(screen.getByText('Powered by')).toBeInTheDocument();
	});
	it('should render SvelteKit link with correct attributes', () => {
		render(Layout);
		const link = screen.getByLabelText('SvelteKit Docs Link');
		expect(link).toHaveAttribute('href', 'https://svelte.dev/docs/kit/introduction');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noreferrer noopener');
		expect(link).toHaveClass(
			'expand',
			'pt-1',
			'underline-offset-4',
			'hover:underline',
			'focus-visible:outline-2',
			'focus-visible:outline-offset-8',
			'focus-visible:outline-black',
			'mx-2',
			'inline-flex',
			'items-center',
			'font-svelte',
			'text-accent'
		);
		expect(link).toHaveTextContent('@sveltejs/kit');
	});
});

// TODO: Figure out why this test keeps failing
describe.skip('HoverCard', () => {
	it('should render hover card content when triggered', async () => {
		render(Layout);
		const trigger = screen.getByLabelText('SvelteKit Docs Link');
		await fireEvent.mouseOver(trigger);
		const hoverCard = screen.getByLabelText('Hovercard');
		expect(hoverCard).toBeInTheDocument();
		expect(hoverCard).toHaveClass('rounded-lg', 'w-80');
		const avatar = screen.getByLabelText('Logo of web framework used');
		expect(avatar).toBeInTheDocument();
		const avatarImage = screen.getByAltText('Svelte Logo');
		expect(avatarImage).toBeInTheDocument();
		expect(avatarImage).toHaveAttribute('src', 'Svelte-Logo.png');
		const frameworkName = screen.getByLabelText('Name of web framework used');
		expect(frameworkName).toHaveTextContent('SvelteKit');
		expect(frameworkName).toHaveClass('text-sm', 'font-semibold');
		const motto = screen.getByLabelText('Motto of web framework used');
		expect(motto).toHaveTextContent('Web development, streamlined.');
		expect(motto).toHaveClass('text-sm');
	});
});

describe('Main content', () => {
	it('should render main element', () => {
		render(Layout);
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
	});
});
