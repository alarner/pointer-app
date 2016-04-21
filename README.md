# Pointer App

## To run...

1. Clone
1. `npm install`
1. `createdb pointer-app`
1. `npm run dev` ... fill in db credentials and session
1. `knex migrate:latest`

## Coding Guidelines

### Branching

* Each new technical task should have its own feature branch with a short name describing the new feature. The format of the branch name should be in snake case, such as *add_backend_story_model*.
* When a task is complete the developer should issue a pull request for that feature branch. That developer cannot merge the pull request until they get at least three thumbs ups from other developers in the class.

### Code Format

* White space should be in tabs, not spaces.

### Components

* There should be one component for each page.

### HTML

* Each page component should be a `<section>`.
* HTML attributes should use double quotes.

### CSS

* We will use the [Skeleton CSS grid framework](http://getskeleton.com/). It is already installed. Layout elements should use the Skeleton grid system whenever possible.
* CSS class names should use dashes, for example `.story-box`.
* Each page component should have its own unique CSS class on the `<section>` element.
* CSS that is specific only to a component should live in a scss include file prefixed with an _ that is imported into `main.scss`, such as `_home-page.scss`.
* Global styles (styles that should be applied to multiple pages) live in `_global.scss`

### JavaScript

* No code should have eslint errors.
* Strings should use single quotes.
* Our router is using the more modern HTML5 push state so urls need not be prefixed with a `#`.

## Models

*Add UML diagram here*

## Contributors

*Add your GitHub profile here*