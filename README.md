# Ionic Tabs Template - Upgraded

The inception idea of this project was to add to the "out of the box" template that Ionic provides so it's easier and faster for developers to get started on a hybrid application. We noticed some clear areas where this template could improve (such as keyboard accesibility and desktop UI compatibility) and set out to solve them in this project.

Hence, this project is an extension of the tabs template that is provided by Ionic. It provides the following additional functionalities.

- Basic desktop compatible UI
- Cypress testing
- Keyboard accessibility ("skip to" navigation element that can be accessed upon tabbing)
- Project formatting (using [Prettier](https://prettier.io/))

Note: the template retains all provisions afforded by the original template as provided by Ionic.

## How to best use this template

This template provides some additional essential elements to help VueJS, Ionic developers get started on their hybrid projects easier and faster.

You may start your project with this template by cloning this repository on to your local environment. Alternatively, you can copy components and concepts present in this template.

For example, you may copy the src/components/SkipMenu/SkipMenu.vue file to easily incorporate part of WCAG 2.2 AA standard to your code.

## Package repository setup

To run the application, you must clone the repository. To do this using SSH, use the following command

```bash
git clone git@github.com:No-Moss/IonicVueTabsTemplate.git
```

To clone the repository using HTML, use the following command

```bash
git clone https://github.com/No-Moss/IonicVueTabsTemplate.git
```

## Install the Ionic CLI

To successfully follow these instructions, you must have Node.js installed on your computer. For help on installing Node.js, follow [these instructions](https://ionicframework.com/docs/intro/environment).

```bash
npm install -g @ionic/cli
```

## Running the application

Before you're able to run the application, you must have Ionic CLI installed globally on your computer (see last section).

```bash
cd IonicVueTabsTemplate
ionic serve
```

### Running project formatting

Within the project directory, use the following command in terminal to check whether the formatting of the project complies by Prettier 3.2.5 default rules.

```bash
npm run format
```

This command will exit with an error if the project has formatting errors. To fix formatting errors, run the following command

```bash
npm run format-fix
```

### Running Cypress End to End Tests

Use the following command to run Cypress E2E testing on CLI

```bash
npm run test:e2e
```

To run Cypress E2E testing on the Cypress GUI, run this command

```bash
npm run test:e2e:ui
```

### Running Cypress Components Tests

Note: There are currently no component tests on the project.

The following command may be used to run the component tests

```bash
npm run test:component
```

To run Cypress component testing on the Cypress GUI, run this command

```bash
npm run test:component:ui
```
