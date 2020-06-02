# pollen

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

### Run Storybook and jest for development

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
