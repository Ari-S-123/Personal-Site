# [Just a personal resume site](https://www.ari-s.dev)

## To replicate

1. Clone the repository.

2. Make sure you are using the latest Node LTS version at the time of the last commit [v24.x].

3. Run `npm i -g bun` to install bun.

4. Run `bun i` to install the dependencies.

5. Run `bun run dev --open` to start the development server and open the app in a new browser tab.

## Scripts

- Run `bun run lint` to check for both linting and formatting errors.

- Run `bun run format` to fix formatting errors.

- Run `bun run check` to run the svelte-check.

- Run `bun run test` to run the tests.

- Run `bun run build` to build a production version of the app.

- Run `bun run preview --open` to run a preview of the production build and open the app in a new browser tab.

- Run `bun run gen:semantic-index` whenever you update project or experience content to refresh `src/lib/data/semantic-index.json`.
