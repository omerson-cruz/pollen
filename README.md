# 🌻🐝 pollen

## Project setup

First we need to add the Fontawesome NPM auth token to your shell profile file.

```
nano ~/.profile
```

Add this to your file:

```
export FONTAWESOME_NPM_AUTH_TOKEN="TALK_TO_JON_JANDOC_OR_DAVID_VICTOR_FOR_THIS_TOKEN"
```

Exit out and save by typing `Ctrl + X` and `y` to confirm.

Then refresh your environment variables and install dependencies.:

```
source ~/.profile
npm i
```

### Run Storybook with hot reloading

If this is your first time running Storybook locally, you'll need to generate a test results file.

```
npm run test:generate-output
```

Then you can start developing:

```
npm run dev
```

### Compiles and builds library for external use

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Installation and usage

To use Pollen in your project, install it.

```
npm i @bambeehr/pollen
```

Components and accompanying constants/enums can be imported using named imports.

```
<template>
  <article>
    <TypeHeading
      tag="h1"
      :variant="$options.Typography.Heading.GIGA"
      :weight="$options.Typography.Weights.REGULAR
    >
      Hello world!
    </TypeHeading>
    <TypeBody
      :variant="$options.Typography.Body.LARGE"
      :weight="$options.Typography.Weights.MEDIUM"
    >
      Lorem ipsum dolor sit amet.
    </TypeBody>
  </article>
</template>

<script>
import { TypeBody, TypeHeading, constants } from '@bambeehr/pollen';

const { Typography } = constants;

export default {
  components: { TypeBody, TypeHeading },
  Typography
}
</script>

```

More code examples are available in [Storybook](http://pollen.bambee.com/).

## Techincal Details and contribution

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is being used as the primary styling methodology/framework within Pollen. For packaging and portability reasons, we're using the `@apply` directive within style blocks to bundle utility classes behind BEM-style element classes so that these components are usable within projects that do not have Tailwind implemented.

While fully using Tailwind within `@apply` behind BEM selectors may seem counter to the idea of utility-first CSS, it does offer advantages for our particular case. The eventual plan is that we adopt Tailwind in our other web projects with utility classes as intended by the framework, and using shared configurations that can be imported from the `./src/themes.js` file within Pollen. By using Tailwind classes in Pollen with `@apply`, we ensure that current styled components are portable to projects not yet using Tailwind. When those projects do adopt Tailwind and its utility calsses, we will ensure implementation consistency between Pollen components and the project.

### Testing

Jest is used for unit and snapshot testing.

### Storybook

While unit tests are useful for checking logic in code, with UI components we more often care about how a thing looks and interacts. Storybook is a tool that allows us to mount components in isolation with different props (different "stories") to aid in development, while also effectively serving as living documentation.

Storybook will launch with hot reloading when you run `npm run dev`. When commits are made in this repo to `master`, the resulting Storybook will be published to [pollen.bambee.com](https://pollen.bambee.com).

"Storybook driven development" is an idea similar to test driven development. In TDD, the idea is to write failing test first that describe the desired code funcationality, then write code to make the tests pass. With Storybook driven development, you're similarly encouraged to write component stories first so you can think through what props and events your component will require and what resulting UI should result. _Then_ you create your component and verify its functionality within Storybook.

## `npm link` and local development

You may want to develop new components in Pollen in parallel with features in your web projects that use Pollen as a dependency. To do this, you can use npm linking.

```
# Go to the root project folder on your system for Pollen.
# The path actual below depends on your set up.
cd ~/Sites/bambee/pollen

# Create a symlink in the Pollen directory.
npm link

# Navigate to your active web project that is using Pollen.
cd ~/Sites/bambee/honey

# Link the Pollen dependency to your local version.
npm link @bambeehr/pollen
```

To undo this:

```
# Navigate to your active web project that is using Pollen.
cd ~/Sites/bambee/honey

# Remove the link to Pollen.
npm unlink --nosave @bambeehr/pollen

# Reinstall the remote version of Pollen.
npm i

#Go to Pollen
cd ~/Sites/bambee/pollen

# Destroy the symlink.
npm unlink
```

Order is important. Linking commands are the same in yarn. Just use `yarn link` in place of `npm link`.
