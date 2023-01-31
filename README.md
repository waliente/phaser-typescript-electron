# Phaser TypeScript Electron starter template

![Phaser Typescript Electron](https://i.ibb.co/gdVsT4J/phaser-typescript-electron-template.png)

### This is a 🕹️[Phaser 3](https://github.com/photonstorm/phaser) starter with ⌨️[TypeScript](https://www.typescriptlang.org/) and ⚛️ [Electron](https://www.electronjs.org/), 📦[Rollup](https://rollupjs.org) and [Vite](https://vitejs.dev/).

**&#128293;&#128293; HOT RELOAD ON ELECTRON INCLUDED! &#128293;&#128293;**

---

You can use this template with or without Electron.
The project folder structure is:

- **client**: where are the phaser ^3.55.2 with typescript 4 rollup and vite is present.
- **electron**: the electron project.

## Instructions
Execute inside relative folder **client** and **electron** `yarn` or `npm install` to install all dependencies required.

### &#128193; Client folder
Inside **client** folder you can run Phaser with Typescript, Rollup and Vite but without Electron.

| Command | Description |
|---------|-------------|
| `yarn` or `npm install` | Install project dependencies |
| `yarn dev` or `npm run dev` | Builds project and open web server, watching for changes |
| `yarn build` or `npm run build` | Builds code bundle with production settings  |
| `yarn serve` or `npm run serve` | Run a web server to serve built code bundle |

### &#128193; Electron folder
Inside **electron** folder you can run Electron with Phaser! You can run in dev mode or production mode for the final preview and release. 

**&#128293;&#128293; HOT RELOAD INCLUDED! &#128293;&#128293;**

| Command | Description |
|---------|-------------|
| `yarn` | Install project dependencies |
| `yarn dev` | Builds project and open web server from client folder and Electron, **watching for changes** |
| `yarn preview` | Starts a preview for a final release  |
| `yarn build`| Build app with Electron |

### TODO

- Better manage of process.env
