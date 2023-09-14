# Microfrontend: React + Jotai + Vite + Shadcn + Tailwindcss (Module Federation)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Command:

- npm create vite@latest
- select React project -> Javascript
- cd to project folder
- npm install
- open Visual Studio Code
- Install Eslint to VSCode
- npm i -save-dev -save-exact prettier
- npm i --save-dev eslint-config-prettier
- Append to extends in the file .eslintrc.cjs as last option 'prettier'
- Append to scripts -> package.json "format": "prettier --write ./src"
- For cheking conflicts with prettier rules run command:
  npx eslint-config-prettier .\src\main.jsx

**Links:**

- https://tailwindcss.com
- https://ui.shadcn.com/docs/components
- https://jotai.org/docs/core/atom
- https://tailwind.build/classes
- https://www.youtube.com/watch?v=WoqrUn-0usA&t=13s&ab_channel=%D0%9F%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0%D0%BF%D1%80%D0%BEFrontend%F0%9F%92%9C
