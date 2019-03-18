# Design System

## Atomic Design

### Basic Workflow.
**Atoms**
Building blocks (basically elements) that make up all UI's

examples:
`labels, fields, buttons, etc`

**Molecules**
Groups of atoms working as a unit

example:
`Search bar with a button, label, and input field`

**Organisms**
Parts of an interface comprised of atoms, molecules, and other organisms:

examples:
`Header navbar with button, searchbar(molecule example), background, logo, etc.`


**Templates or Ecosystems**
Groups of organisms that are weaved together to form the basis of a page/ecosytem - without content.

example:
`Landing page template: Header organism, content organism with cards organism, etc, and footer organism.`
- template with placeholders and the like


**Pages or Ecosystems**
Templates/ecosystems with actual content

### Why use it
- Simple to grasp structure
- modular, easy to basically build a consistant bootstrapped ui.
- smaller components make responsive design easier
- Hierarchical components make redesign/ new designs easier

### How it's set up in this project:

**Simplify Imports**
in `webpack.config.js`

```js
resolve: {
    alias: {
        '@atoms': path.resolve(__dirname, 'core/components/atoms'),
        '@molecules': path.resolve(__dirname, 'core/components/molecules'),
        '@organisms': path.resolve(__dirname, 'core/components/organisms'),
        '@ecosystems': path.resolve(__dirname, 'core/components/ecosystems'),
        '@environment': path.resolve(__dirname, 'core/components/environment'),
    }
}
```

**Set Up Jest Mocks**
```js
jest.mock('@atoms', () => require('@atoms/__mocks__/atoms.js'))
jest.mock('@molecules', () => require('@molicules/__mocks__/molecules.js'))
jest.mock('@organisms', () => require('@organisms/__mocks__/organisms.js'))
jest.mock('@ecosystems', () => require('@ecosystems/__mocks__/ecosystems.js'))
jest.mock('@environment', () => require('@environment/__mocks__/environment.js'))
```


## Easy problems to hit:

1. Tooooo many components
    - The more strict with it you are, the more complicated things can get.
    - Might help to split things by purpose like: atoms = design, molecules = reusability, organisms = functionality
    - React Components

2. Things like redux can confuse things
    - Potential fix is adding a connected components folder

3. long references to imports
    - Webpack aliases and index.js


