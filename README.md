# N47 Showcase Project

This is an [application directory](http://apps.network47.org) for [Network47.org](https://network47.org). It includes various web development assets and configurations.

## Files

- `.eleventy.js`: Eleventy configuration file
- `.gitignore`: Git ignore rules
- `Makefile`: Makefile for build automation
- `package.json`/`package-lock.json`: Node.js dependencies and scripts
- `src/`: Source directory containing project files
  - `index.html`: Main HTML file
  - `projects.json`: Project configuration data
  - `assets/`: Directory with assets like styles and logos

## Setup

To set up the project, run:

```bash
npm install
```

## Build

To build the project, use:

```bash
make build
```

This will generate the output in the `_site` directory.

There's also an `watch:scss` npm runner that I'm too lazy to link up properly, because I'm about to take a nap, I think.

## Publish

To publish the project, run:

```bash
make publish
```

But this won't do much for you if you don't have SSH credentials setup. 😉