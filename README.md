<h1 align="center">Multi-Step Form</h1>
<p align="center">
  Made with <code>HTML</code>, <code>CSS</code>, <code>TypeScript</code>, <code>ReactJS</code>, <code>TailwindCSS</code>
</p>
<p align="center">
  Bootstrapped with <code>Vite</code>
</p>

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

I made my own Figma prototype and redesigned the whole application.

Figma prototype: https://www.figma.com/file/6ecRJPjwajwLiwWVPLbdCh/Multi-step-form

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
- **Github Actions** for CI/CD

## 🔨 Build project

<table>
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>npm&nbsp;start</code></td>
    <td>Starts a local web server with HMR (Hot Module Replacement) for development</td>
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
</table>

## 📁 File Structure

<table>
  <tr>
    <th>Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>src</code></td>
    <td>Source files needed for application development</td>
  </tr>
  <tr>
    <td><code>src / assets</code></td>
    <td>Folder with static assets (images, favicon)</td>
  </tr>
  <tr>
    <td><code>src / components</code></td>
    <td>Folder with React components</td>
  </tr>
  <tr>
    <td><code>src / pages</code></td>
    <td>Folder with pages</td>
  </tr>
  <tr>
    <td><code>src / utils</code></td>
    <td>Folder with utility functions</td>
  </tr>
  <tr>
    <td><code>src / index.html</code></td>
    <td>Main html file</td>
  </tr>
  <tr>
    <td><code>src / App.tsx</code></td>
    <td>Main code for the application</td>
  </tr>
  <tr>
    <td><code>src / index.tsx</code></td>
    <td>Entry point for the module bundler</td>
  </tr>
  <tr>
    <td><code>src / index.css</code></td>
    <td>Contains Tailwind declarations</td>
  </tr>
  <tr>
    <td><code>src / vite-end.d.ts</code></td>
    <td>Some Typescript stuff for Vite</td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>.github / workflows / main.yaml</code></td>
    <td>CI/CD instructions for Github Actions</td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>docs</code></td>
    <td>Folder with additional information, documentation</td>
  </tr>
  <tr>
    <td><code>docs / results</code></td>
    <td>Folder with screenshots of how the application works after being fully developed</td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>LICENSE</code></td>
    <td>MIT License</td>
  </tr>
  <tr>
    <td><code>tsconfig.json</code></td>
    <td>Configuration for TS compiler</td>
  </tr>
  <tr>
    <td><code>tsconfig.node.json</code></td>
    <td>Some other configuration for TS compiler? Vite added it, so ... it is what it is</td>
  </tr>
  <tr>
    <td><code>package-lock.json</code></td>
    <td>JSON file that keeps track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers</td>
  </tr>
  <tr>
    <td><code>package.json</code></td>
    <td>JSON file that holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies</td>
  </tr>
  <tr>
    <td><code>vite.config.js</code></td>
    <td>Configuration for Vite module bundler</td>
  </tr>
  
</table>

## 📦 NPM Packages worth mentioning

- `tailwindcss` - For CSS
- `vitest` - Unit testing
- `framer-motion` - Adds nice looking animations
- `classnames` - Conditionally define sets of CSS classes
- `react-final-form`, `final-form` - Form validation

## 💡 Details

Not that difficult at all. But I am not gonna use TailwindCSS in any upcoming projects! Styled Components are so much better! And the code looks much, much cleaner!

Features

- Nice animations
- Animated counters for final prices
- Unit tests
- Form validation with React Final Form

## 🔗 Useful resources

- [How to deploy a react app on GH Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/) - to put shortly, just use HashRouter in the application
- [Github Actions - Введение в CI/CD](https://www.youtube.com/watch?v=e0A2hDObLmg) - Introduction to CI/CD with Github Actions, in Russian. Helped me to get understand the basics
- [Framer Motion](https://www.framer.com/motion/) - Official framer-motion docs

## 👤 Author

- Frontend Mentor - [@GrbnvAlex](https://www.frontendmentor.io/profile/GrbnvAlex)
- Telegram - [@Arlagonix](https://t.me/Arlagonix)
- Github - [@arlagonix](https://github.com/arlagonix)
