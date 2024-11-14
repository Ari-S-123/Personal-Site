import { describe, it, expect } from 'vitest';
import Layout from '../../routes/+layout.svelte';
import { render, screen } from '@testing-library/svelte';

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

describe('Footer', () => {
	it('should render the footer with correct text and structure', () => {
		render(Layout);
		const footer = screen.getByLabelText('footer');
		expect(footer).toHaveClass('text-center');

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

describe('Main content', () => {
	it('should render main element', () => {
		render(Layout);
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
	});
});
