This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Islands - Tiny World

<img width="1437" alt="Screen Shot 2021-07-26 at 01 47 28" src="https://user-images.githubusercontent.com/882516/126934468-63c51e7a-075a-4a6a-b2cd-1cd6652b8b5e.png">

## Getting Started

Install dependencies:

```bash

npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Run the production server:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### ./island directory

Included in an [Next.js](https://nextjs.org/) boilerplate project is the `island` directory.
The inside of the `island` directory looks like to the following:

```
island
│── components
│── hooks
├── node_modules
├── pages
└── publick.tsx
```

#### components ####
This is where your React components are living. Each component is containing the `.tsx` file and the UI logic, and to styled those were configured [`styled-components`](https://styled-components.com/) library because of the use of props in the place of classes and encapsulate styling.

***TODO***: replacing the `.tsx` file to folder which contais the `.tsx` file, along with a `story.tsx` file, and optionally `.presets`, and `.props` files for larger components.

#### hooks ####
This is where the island app's logic is living. With Custom React Hooks you can extract these reusable stateful logics and test them separately and also using hooks, logic and UI are easier to separate
in app's Island has custom hooks like: 
* `useData`: contains the  `tiny World` structure, it's a matrix where the states of islands are stored and have the logic for creating an island. the `useData` export the `tiny world` matrix and the crate island actions `onCreateIsland`
* `useSelector`: contains the height and width selector structure, the hook are containing the logic for setting the `tiny world` matrix dimensions. 
* `useIsland`: contains the island counter structure, the hooks has the logic getting the total island where were selected for the moment in the `tiny World` matrix, the algorithm implemented is `union-find`:
The basic idea behind this data structure is to repeatedly merge elements in the same visited array. This is done by representing each visited array as a tree (with nodes keeping track of their own parent, instead of the other way around), you can check whether 2 elements are in the same array visited by traversing to the root node and you can merge nodes by simply making the one root the parent of the other root.

For getting more info about the union-find algorithm, visit the [wiki](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)

#### pages ####
This is where your pages components are live. In [Next.js](https://nextjs.org/), a page is a React Component exported from a `.tsx` file in the pages directory. Each page is associated with a route based on its file name. Example: If you create `pages/island.tsx` that exports a React component like below, it will be accessible at `/island`.

## TODO

### ./island directory

#### theme ####
Here lives the theme for Island app, including spacing, colors, and typography.
the theme is living in `_app.tsx` file in pages folder

#### utils ####
This is a great place to put miscellaneous helpers and utilities. Things like formatters, maybe the `union-find` algorithm if the algorithm will be used from other hooks or sections, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

#### storybook ####
This is where your stories will be registered and where the Storybook configs will live

#### test ####
This directory will hold your Jest configs and mocks, as well as your [storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) test file. This is a file that contains the snapshots of all your component storybooks.

