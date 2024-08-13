# 💼 Portfolio ([viveralia.com](https://astro.build))

A modern redesigned portfolio showcasing my best projects saved on GitHub.

## How does it work?

The portfolio is built using [Astro](https://astro.build/) with SSR routes using **GitHub as a CMS**.

![Screenshot of the above the fold of my portfolio](https://i.ibb.co/TY65SF6/localhost-4321.png)

This is done by querying my profile information and pinned repos via the [GitHub GraphQL API](https://docs.github.com/en/graphql). So, whenever a chage is made on GitHub, it will inmediatly be displayed on the portfolio. It is all automated and there is no need to duplicate the same information over and over again!

![Screenshot of my pinned GitHub repos](https://i.ibb.co/dpbG6pr/Screenshot-2022-12-06-at-13-01-47.png)

## 🧞 Commands

To run the project locally you first need a `GITHUB_PERSONAL_ACCESS_TOKEN` stored in a `.env` file.

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
