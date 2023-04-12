<h1 align="center">Javascript Slices architecture</h1>

<details>
  <summary>Contents</summary>

<!-- prettier-ignore-start -->
<!-- TOC -->

- [About](#about)
  - [Built With](#built-with)
  - [Disclaimer](#disclaimer)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Layout](#layout)
  - [/index.html](#indexhtml)
  - [/src/main/](#srcmain)
  - [/src/modules/](#srcmodules)
    - [Notes](#notes)
    - [Components](#components)
    - [Helpers](#helpers)
    - [Services](#services)
    - [Store](#store)
  - [/src/modules/lib](#srcmoduleslib)
  - [/src/assets/ and /public/](#srcassets-and-public)
  - [/test/](#test)
    - [notes](#notes-1)
- [See Also](#see-also)
  <!-- TOC -->
  <!-- prettier-ignore-end -->

</details>

## About

This project is a simple example of how to organise a scalable application.

It's built in React, but the setup is flexible enough to be used in most mid to large javascript applications.

#### Built With

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

#### Disclaimer

The way to organise code is VERY opinionated, and there are many ways to do it. Ideally
you shouldn't spend too long planning the folders. The setup in this guide is just one way to do it that is scalable to
any application without being to complicated.

This guide is a good starting point, but feel free to adapt to suit the development team. The key thing to remember is
consistency and clarity.

## Getting Started

#### Prerequisites

This project runs with Yarn, but the only dependency to install in advance is [Node 16.9+](https://nodejs.org/en). The
best way to install Node and keep it up to date is with Node Version Manager ([nvm](https://github.com/nvm-sh/nvm)
or [nvm-windows](https://github.com/coreybutler/nvm-windows)). Corepack is a new way to manage different package
managers (npm, yarn, pnpm) that may vary between projects

1. [Install NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Set Node to the latest long term support (LTS) version
3. [Enable Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html)

```shell
# 1
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

#2
nvm install --lts

#3
corepack enable
```

#### Installation

With corepack enabled above, you no longer need to install or manage different package managers. Just need to run `yarn`
to install package dependencies.

```shell
yarn
```

#### Usage

`yarn dev` Runs the app locally in **development** mode

`yarn preview` Runs the app locally in **production** mode

`yarn build` Packages the application in a **production** bundle ready to be deployed

## Layout

```
├── index.html
├── src/
│   ├── assets/
│   ├── main/
│   └── modules/
│       ├── moduleOne/
│       └── moduleTwo/
└── test/
```

#### /index.html

For [ViteJs](https://vitejs.dev/guide/) applications, the entry point of the application is the `index.html` file. Any
imports in this file are then included in the application bundle.

This is a little different from other react frameworks such
as [Create-React-App](https://create-react-app.dev/docs/getting-started)
or [NextJs](https://nextjs.org/docs/getting-started) that use javascript entrypoint(s).

#### /src/main/

The `main` directory is the heart of the application. It combines all the other code to be output from single core
location.

```
└── main/
    ├── index.tsx
    ├── App/
    ├── Router/
    └── Store/
```

You should not usually be importing anything from main to elsewhere, other than type interfaces (eg `RootState`)

- `App/`: The root React application
  - This should be fairly simple and only have minimal global functionality that is required to be used **EVERYWHERE**
  - The `<Outlet />` child component will render modularised feature views
- `Router/`: The central directory for page routing
  - Depending on the size of the application this can import Sub-Routers from other modules
  - Note that imported pages are _always_ lazy loaded in. This gives us a reasonable baseline for page level code
    splitting without thinking too much about it
- `Store/`: The root redux store
  - This combines the global application state
- `index.tsx`: The application entry point sourced in the top level `/index.html` file
  - The whole application is initialised here, so it includes all top level contexts (e.g. state, routes)
  - Any non react logic (preloading config, data, etc) can also be loaded here to be available for the reast of the
    application
- `index(.css|.scss)` Global application css styles
  - This is for universal styles shared across the whole site (eg typography, css reset, etc)
  - In this example, the application uses [tailwind](https://tailwindcss.com/) but it Vite has built-in support for
    other styling tools such as SASS, or simply drop in any style framework

#### /src/modules/

The modules directory contains the bulk of the site code. Code is grouped feature first, and then by file type.

This is the key setup that keeps the code easily scalable regardless of future requirements.

Adding a new feature will exist cleanly in its own folder structure and be isolated from existing code.
Modifying existing code generally means code changes stay within a single location and its easy to find dependencies

These are the key directories that will be in most React modules

- **components:** React component .tsx files
- **helpers:** Reusable functions
- **services:** Integrations to 3rd party APIs
- **store:** Redux actions/selectors/etc

These are additional folder with more specific uses. There are of course many ways to organise things, but remember to
not be too specific or restrictive, the naming needs to be reused for any feature

- **types:** Typescript interfaces
- **data:** Hardcoded production datasets such as pre-generated json
- **test or \_\_test\_\_:** Test code, data or similar specific to that feature.

##### Notes

_'Feature'_ is a pretty ambiguous term here. It varies depending for each application on what could be defined as a
feature. For a simple application, you could have just 'user' as a feature that covers login, registration and user
account information. For a large application you may wish to break this into multiple features (login, registration,
myAccount). If unsure, a good rule of thumb is to work closely with the Product Owner and try to align features to the
same way _they_ personally organise it. This way both development and product work with the same mental model of the
application.

_'File Type'_ could also be debated, but what is more important is that the folder names are CONSISTENT between modules.
Ideally the folders are in a reusable pattern that is quick to navigate and not specific to a feature. Not every module
needs all folders, but each module should have the same NAME for that folder.

##### Components

The components directory is, where nearly every React component should live. Each component should be in its own
directory, and generally not nested within other components

```
└── ComponentOne/
    ├── index.tsx
    ├── index.(spec|test).tsx
    ├── styles.(module.?)scss
    ├── helpers.ts
    └── selectors.ts
```

- `index.tsx`: The root component file, and is where the component itself lives. Try to stick to the single
  responsibility principle where possible, each component should focus on doing one thing.
- `index.test.tsx`: The test file specific to that component
- `styles.scss` or `styles.ts` (or similar): Used for css (or whatever styling tool is being used). Optionally you can
  use [css modules](https://vitejs.dev/guide/features.html#css-modules) to keep the css safely scoped to that component.
- `helpers.ts`: Helper functions or hooks. This is typically for things like event handling or data mapping, and
  separates the visual component code with the functional javascript.
- `selectors.ts`: Redux selectors for this specific component, that restructure the raw state into component specific
  data. Where possible data should be formatted within a selector, as this will then be memoised correctly.

##### Helpers

The helpers directory is for functions and utility specific to the module. This is code that is shared between
components.

##### Services

The services directory is for code that interacts with third party APIs, This can be either remote (`fetch`, `axios`) or
browser native (cookies, localStorage).

Services can be as simple as an object of multiple fetch methods, or using some framework such
as [RTK Query](https://redux-toolkit.js.org/rtk-query/overview).

A service is preferred over having a component or react action directly talk to the API, this decouples the code,
meaning less places to refactor if the data source changes.

##### Store

The store is for Redux code. The main code is the reducer 'slice' with optional asynchronous actions used to set state,
and selectors to retrieve and manipulate the state.

```
└── products/
    └── store/
        ├── index.ts
        ├── actions.ts
        └── selectors.ts
```

#### /src/modules/lib

The 'lib' (or 'library') folder is a special module for common reusable code. This is miscellaneous code that is
designed to be generic and shared. It is called library as it is a collection of utilities that have no connection to
each other.

Care should be taken to NOT have this end up as a dumping ground, since most code is specific to a feature. A good
guideline before putting code here is to consider if the code can be used for ANY project, not just this specific
application.

#### /src/assets/ and /public/

These directories are used for static non-js assets (images, fonts, etc). Content can go into both locations, but used
in slightly different ways.

The **src/assets** folder is for most images imported via the application. vite will then compile this image in a
production optimised way

```typescript jsx
import reactIcon from "~assets/react.svg";

const ImageInReact = () => (
  <img src={reactIcon} alt="this shows the react logo" />
);
```

See [Official Guide](https://vitejs.dev/guide/assets.html)

The **public** folder is for raw files that are used _directly_ on the website and _not_ imported via the application.

For example, The `vite.svg` image can be referenced with importing '/vite.svg' directly.

```typescript jsx
const ImageInReact = () => (
  <img src="/vite.svg" alt="this shows the react logo" />
);
```

For most assets, it is better to have them in the `/src/assets` folder where the files are optimised for production.

#### /test/

The root `/test/` directory is for setting up tests globally. This includes things like reusable test helpers to avoid
repeating the same steps in every test, as well as fake API data to mock responses.

```
└── test/
    ├── setup.js
    ├── helpers/
    └── mocks/
```

At the root for the folder, `setup.js` is used by [vitest on every test](https://vitest.dev/config/#setupfiles) to
create a standard baseline for tests. You can use this for setting standard expected functions (eg non-react libraries
that are expected to run in the background), or resetting data after each test.

##### notes

This project uses [vitest](https://vitest.dev/) rather than [jest](https://jestjs.io/) for writing tests. However, both
tools are very similar and vitest uses the same API. jest plugins should all be supported by vitest.

## See Also

- [React File structure recommendations](https://legacy.reactjs.org/docs/faq-structure.html)
- [Redux style guide](https://redux.js.org/style-guide/)
