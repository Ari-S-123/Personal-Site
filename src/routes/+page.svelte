<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
</script>

<main>
	<Avatar.Root class="w-64 h-64 rounded-full object-cover border-accent border-4 profile-border">
		<Avatar.Image src="Professional Profile Pic.jpg" alt="Picture of Ari" />
		<Avatar.Fallback>Picture of Ari</Avatar.Fallback>
	</Avatar.Root>
	<div class="flex flex-row justify-center gap-0.5 my-6">
		<Button
			variant="link"
			target="_blank"
			rel="noreferrer noopener"
			href="https://github.com/Ari-S-123"
			><img src="GitHub-Logo.png" alt="GitHub Logo" class="profile-links expand" />
		</Button>
		<Button
			variant="link"
			target="_blank"
			rel="noreferrer noopener"
			href="https://www.linkedin.com/in/aritra-saharay"
			><img src="LinkedIn-Logo.png" alt="LinkedIn Logo" class="profile-links expand" />
		</Button>
		<Button variant="link" target="_blank" rel="noreferrer noopener" href="https://x.com/Ari_S_123"
			><img src="X-Logo.png" alt="X Logo" class="profile-links expand" />
		</Button>
		<Button
			variant="link"
			target="_blank"
			rel="noreferrer noopener"
			href="https://www.youtube.com/@Ari_S_123"
			><img src="Youtube-Logo.png" alt="Youtube Logo" class="profile-links expand" />
		</Button>
	</div>
	<h1 class="text-4xl font-bold m-2">Hi, I'm <span class="text-accent">Ari</span></h1>
	<p class="text-lg font-bold m-2">
		I'm a full-stack SWE and a student pursuing a Master's Degree in CS at Northeastern University.
		My present interests lie at the intersection of Web/Mobile Development, Data Visualization, and
		A11y. However, I love learning new things, so I am open to any opportunity that increases the
		breadth and depth of my skillsets.
	</p>
	<div class="flex flex-row justify-center gap-8 mx-4 my-2 font-bold">
		<!--		Styling from '../app.css' doesn't apply here for some reason-->
		<Button
			target="_blank"
			rel="noreferrer noopener"
			class="p-4 rounded-lg text-base font-bold shadow-lg hover:scale-105 transition-transform duration-300"
			size="lg"
			href="https://observablehq.com/d/ae6c08dbf1f6a458"
			>Dataviz Projects
		</Button>
		<Button
			target="_blank"
			rel="noreferrer noopener"
			class="p-4 rounded-lg text-base font-bold shadow-lg hover:scale-105 transition-transform duration-300"
			size="lg"
			href="https://github.com/Ari-S-123?tab=repositories&q=&type=public&language=&sort=stargazers"
			>Public GitHub Projects
		</Button>
	</div>
</main>
