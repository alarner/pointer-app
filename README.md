# Pointer App

## To run...

1. Clone
1. `npm install`
1. `createdb pointer-app`
1. `npm run dev` ... fill in db credentials and session
1. `knex migrate:latest`

## To update...

1. `git pull origin master`
2. `knex migrate:lastest`
3. `knex seed:run`
4. `npm install` 

## Coding Guidelines

### Branching

* Each new technical task should have its own feature branch with a short name describing the new feature. The format of the branch name should be in snake case, such as *add_backend_story_model*.
* When a task is complete the developer should issue a pull request for that feature branch. That developer cannot merge the pull request until they get at least three thumbs ups from other developers in the class.

#### Steps to take

1. Take the ticket from the whiteboard and move it to the "In Progress" column.
2. Make sure you're on the master branch.
3. Make sure you have the latest version of the code: `git pull origin master`
4. Create a new branch (you should be on master when you do this): `git checkout -b branch_name_goes_here`
5. Do the development work that needs to be done for that ticket.
6. Test that the feature I implemented actually works.
7. Check the coding guidelines to make sure you meet all of them.
8. Double check the code changes you've made: `git status`, `git diff`
9. `git add .`, `git commit ...`
10. Run a `git pull origin master` to ensure that you have the latest code.
11. Re-test your code.
12. Push your code `git push origin branch_name_goes_here`
13. Create your pull request, leave a comment explaining what you did.
14. Move ticket to PR column.
15. After fixing any issues and getting three thumbs up, merge pull request into master.
16. Move ticket to completed column.
17. Tell everyone to run a `git pull origin master`.
18. Switch back to your master branch: `git checkout master`
19. Pull newest changes from master: `git pull origin master`
20. Rinse and repeat


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
![](./Pointer-App.png)
## Contributors
[Janina Hartley](https://github.com/jhartley1412)

[Anna Hunter](https://github.com/afmonty)

[Katy Cassidy](https://github.com/ihatetoast)

[Jen Udan](https://github.com/judan)

[Dana Lachman](https://github.com/tinydinosaurs)

[Maria Zamora](https://github.com/zamariac)

[Will Cook](https://github.com/willcook4code)

[Dan Buda](https://github.com/DanBuda11)

[Nate Hawthorne](https://github.com/NJHawthorne)

[Martin Grossmann](https://github.com/MHG16)

[Mory Friedman](https://github.com/Moryf1990)

[Josh Warner](https://github.com/joshwerner85)

[Haythem  Hammour](https://github.com/hammour)


*Add your GitHub profile here*