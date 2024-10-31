import { describe, it, expect } from 'vitest';
import Layout from '../../routes/+layout.svelte';
import { render, screen } from '@testing-library/svelte';
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
	it('should render the header with correct text', () => {
		render(Layout);
		expect(screen.getByText(/Built using SSG with/i)).toBeInTheDocument();
		expect(screen.getByText(/@sveltejs\/kit/i)).toBeInTheDocument();
	});
	it('should have correct link attributes', () => {
		render(Layout);
		const link = screen.getByText(/@sveltejs\/kit/i);
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
	});
	it('should have correct heading level and structure', () => {
		render(Layout);
		const header = screen.getByRole('banner');
		expect(header).toHaveClass('text-center', 'my-4');
		const heading = screen.getByRole('heading', { level: 2 });
		expect(heading).toHaveClass('inline-flex', 'items-center', 'justify-center', 'text-lg');
	});
});
