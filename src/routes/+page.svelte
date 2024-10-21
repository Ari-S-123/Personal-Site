<script>
</script>

<main class="home-page">
    <img src="Professional Profile Pic.jpg"
         alt="Picture of Ari"
         class="w-64 h-64 rounded-full object-cover border-accent border-4 profile-border"
    />
    <div class="profile-links">
        <a href="https://github.com/Ari-S-123">
            <img src="GitHub-Logo.png"
                 alt="GitHub Logo"
                 class="w-12 h-12  shadow-lg hover:scale-105 transition-transform duration-300"/>
        </a>
        <a href="https://www.linkedin.com/in/aritra-saharay">
            <img src="LinkedIn-Logo.png"
                 alt="LinkedIn Logo"
                 class="w-12 h-12  shadow-lg hover:scale-105 transition-transform duration-300"/>
        </a>
        <a href="https://x.com/Ari_S_123">
            <img src="X-Logo.png"
                 alt="X Logo"
                 class="w-12 h-12  shadow-lg hover:scale-105 transition-transform duration-300"/>
        </a>
        <a href="https://www.youtube.com/@Ari_S_123">
            <img src="Youtube-Logo.png"
                 alt="Youtube Logo"
                 class="w-12 h-12  shadow-lg hover:scale-105 transition-transform duration-300"/>
        </a>
    </div>

    <h1 class="text-4xl font-bold m-2">Hi, I'm <span class="text-accent">Ari</span></h1>
    <p class="text-lg font-bold m-2">I'm a full-stack SWE and a student pursuing a Master's Degree in CS at Northeastern
        University. My present interests lie at the intersection of Web/Mobile Development, Data Visualization, and
        A11y. However, I love learning new things, so I am open to any opportunity that increases the breadth and depth
        of my skillsets.</p>
    <div class="projects">
        <a href="https://observablehq.com/d/ae6c08dbf1f6a458"
           class="card shadow-lg hover:scale-105 transition-transform duration-300">
            Dataviz Projects
        </a>
        <a href="https://github.com/Ari-S-123?tab=repositories&q=&type=public&language=&sort=stargazers"
           class="card shadow-lg hover:scale-105 transition-transform duration-300">
            Public GitHub Projects
        </a>
    </div>
</main>

<style>
    .home-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        min-height: 100vh;
        text-align: center;
    }

    .profile-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        margin: 1rem;
        padding: 1rem;
    }

    .projects {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        margin: 1rem;
        padding: 1rem;
        font-weight: bold;
    }

    .card {
        cursor: pointer;
        padding: 1rem;
        margin: 1rem;
        border: 1px solid black;
        border-radius: 0.5rem;
        background-color: white;
        color: black;
        text-decoration: none;
    }
</style>
