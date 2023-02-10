<h1 align="center">Multi-Step Form</h1>

<p align="center">
  Made with <code>HTML</code>, <code>CSS</code>, <code>TypeScript</code>, <code>ReactJS</code>, <code>TailwindCSS</code>
  <br>
  Bootstrapped with <code>Vite</code>
</p>

<p align="center">
  <a href="../../actions"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/arlagonix/multi-step-form/main.yaml"></a>
  <a href="../../commits"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arlagonix/multi-step-form"></a>
  <a href="./LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/arlagonix/multi-step-form"></a>
  <img src="https://badgen.net/github/dependabot/arlagonix/multi-step-form" />
  <img src="https://img.shields.io/github/repo-size/arlagonix/multi-step-form" />
</p>

<p align="center">
  <a href="#-screenshots">🖼 Screenshots</a> • 
  <a href="#ℹ%EF%B8%8F-about">ℹ️ About</a> • 
  <a href="#%EF%B8%8F-tools">⚙️ Tools</a> • 
  <a href="#-build-project">🔨 How to Build Project</a> • 
  <a href="#-file-structure">📁 File Structure</a>
</p>

<sup>
  <p align="center">
    <a href="#-npm-packages-worth-mentioning">📦 NPM Packages worth mentioning</a> • 
    <a href="#-details">💡 Details</a> • 
    <a href="#-useful-resources">🔗 Useful resources</a> • 
    <a href="#-author">👤 Author</a>
  </p>
</sup>

## 🖼 Screenshots

<p align="center">
  <img src="./docs/results/step1_desktop.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/step2_desktop.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/step3_desktop.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/step4_desktop.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/stepFinal_desktop.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/step1_mobile.png" width="35%">
  <img src="./docs/results/step2_mobile.png" width="35%">
</p>

<p align="center">
  <img src="./docs/results/step3_mobile.png" width="35%">
  <img src="./docs/results/step4_mobile.png" width="35%">
</p>

<p align="center">
  <img src="./docs/results/stepFinal_mobile.png" width="35%">
</p>

## ℹ️ About

This is a solution to the challenge "Multi-Step Form" from Frontend Mentor ([link](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ)).

The challenge is to build out this multi-step form and get it looking as close to the design as possible.

The users should be able to:

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

I made my own Figma prototype: https://www.figma.com/file/6ecRJPjwajwLiwWVPLbdCh/Multi-step-form

## ⚙️ Tools

- **HTML5**
  - ReactJS
- **CSS**
  - TailwindCSS
- **TypeScript**
  - ReactJS
  - Framer Motion
  - React Final Form
  - Vitest
- **NodeJS**
- **Vite**
- **Github Pages**

## 🔨 Build project

<table>
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>npm&nbsp;install</code></td>
    <td>First of all install all required packages</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;start</code></td>
    <td>Starts a local development web server</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;build</code></td>
    <td>Builds the project, and outputs to the <code>./build</code> folder</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;preview</code></td>
    <td>Start a local web server that serves the built solution from <code>./build</code> for previewing</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;test:unit</code></td>
    <td>Runs unit tests</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;eslint</code></td>
    <td>Check that code conforms to Eslint</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;prettier:check</code></td>
    <td>Check that code conforms to Prettier style</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;prettier:format</code></td>
    <td>Format code in src accoring to Prettier</td>
  </tr>
</table>

## 📁 File Structure

```Markdown
├── 📁 src                    Source files needed for application development
│   ├── 📁 assets             Static assets: images, icons, favicons
│   ├── 📁 components         React components
│   ├── 📁 pages              React page components
│   ├── 📁 utils              Utility functions
│   ├── 📝 index.html         Main html file
│   ├── 📝 App.tsx            App React component
│   ├── 📝 index.tsx          Entry point for the module bundler
│   ├── 📝 index.css          Tailwind declarations mainly
│   └── 📝 vite-end.d.ts      Some Typescript stuff for Vite
│
├── 📁 .github
|   ├── 📁 workflows
|   |   └── 📝 main.yaml      CI/CD instructions for Github Actions
│   └── 📝 dependabot.yml     Instructions for Dependabot
|
├── 📁 docs                   Additional information, documentation 
│   └── 📁 results            Screenshots of how the application works after being fully developed
|
├── 📝 LICENSE                MIT License. Basically you can do whatever you want with the code
├── 📝 tsconfig.json          TypeScript configuration file
├── 📝 tsconfig.node.json     TypeScript configuration file for Vite
├── 📝 vite.config.js         Vite configuration file
├── 📝 tailwind.config.cjs    TailwindCSS configuration file
├── 📝 postcss.config.cjs     PostCSS configuration file
├── 📝 .eslintrc.json         ESLint configuration file
├── 📝 package-lock.json      Keeps track of the exact version of every package that is installed
├── 📝 package.json           Various metadata relevant to the project, scripts, dependencies
├── 📝 .gitignore             Instructions for Git about what files to ignore
└── 📝 README.md
```

## 📦 NPM Packages worth mentioning

<table>
  <tr>
    <td><code>tailwindcss</code></td>
    <td>For CSS</td>
  </tr>
  <tr>
    <td><code>vitest</code></td>
    <td>Unit testing</td>
  </tr>
  <tr>
    <td><code>framer-motion</code></td>
    <td>Adds nice looking animations</td>
  </tr>
  <tr>
    <td><code>classnames</code></td>
    <td>Conditionally define sets of CSS classes</td>
  </tr>
  <tr>
    <td><code>react-final-form</code>, <code>final-form</code></td>
    <td>Form validation</td>
  </tr>
</table>

## 💡 Details

Not that difficult at all. But I am not gonna use TailwindCSS in any upcoming projects! Styled Components are so much better! And the code looks much, much cleaner!

Features

- Nice animations
- Animated counters for final prices
- Unit tests
- Form validation with React Final Form

## 🔗 Useful resources

<table>
  <tr>
    <td><a href="https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/">How to deploy a react app on GH Pages</a></td>
    <td>To put shortly, just use HashRouter in the application</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=e0A2hDObLmg">Github Actions - Введение в CI/CD</a></td>
    <td>Introduction to CI/CD with Github Actions, in Russian. Helped me to get understand the basics</td>
  </tr>
  <tr>
    <td><a href="https://www.framer.com/motion/">Framer Motion</a></td>
    <td>Official framer-motion docs</td>
  </tr>
</table>

## 👤 Author

- Frontend Mentor - [@GrbnvAlex](https://www.frontendmentor.io/profile/GrbnvAlex)
- Telegram - [@Arlagonix](https://t.me/Arlagonix)
- Github - [@arlagonix](https://github.com/arlagonix)
