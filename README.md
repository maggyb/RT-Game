# RT Game
[Wireframes](https://app.moqups.com/unsaved/8ba879d5/edit/page/ad1a5e05a)

## Contributing
Copy the repo to your local machine and move to that directory

    $ git clone https://gitlab.com/futureCodersSE/RT-game.git


Make sure you have the latest version

    $ git pull

Make sure you have installed your node packages

    $ npm install --save next react react-dom

Make sure you run development

    $ npm run dev

Create your branch - every branch will be named after the issue you are working on and follow this naming convention:

    $ RT-GAME-[issueNumber]-[issueName]

So if you were working on issue #1 you would enter this command

    $ git checkout -b RT-GAME-1-create-html-template

You've now created your branch! Remember to commit often and leave descriptive messages! :)

You can add files to your commit by using

    $ git add your-file

You can commit by using this command

    $ git commit -m"Your message"

You can check the status of your branch by using

    $ git status

You can push your code up by using

    $ git push


## SASS
If W3.CSS doesn't have what you need, you will need to write your own CSS. In this project we're using SASS and following [BEM Syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). 

You will want to install [Koala](http://koala-app.com/), to compile your SASS into one minified stylesheet that contains every component. When you submit your code you will commit the SASS and the up to date minified stylesheet, so make sure you compile your SCSS and when the build is successful you can commit it.

In the project there is a `scss/components` folder, in here is where each component has it's own SASS file. If you're working on a component and you need to write your own CSS, you create a [componentName].scss file, and write it in here. 

## Merging your work
If you are happy with your work, you can now submit a merge request, where colleagues will review your work and leave any comments they have.

Make sure your `target branch` is set to `master`
Review your changes and make sure you're happy with them, then ask for a review

Make sure your code is:
* Commented
  * Explain your intention of what you've written
  * '
* Clean
  *   All tags and brackets are closed
  *   Indented correctly (no mixed tabs or spaces)
  *   Variables have appropriate names that are descriptive and are written in camelCase
  *   No unused variables
  *   Reuse variables where possible
  *   No console logs
  *   Classes are meaningful
  *   Spellcheck
  *   CSS, JS and HTML are all in their own files
* Use W3.CSS classes wherever possible
* Test across browsers
* Test across different devices

If the reviewer is happy with your work then they can approve it, and it can be merged into the `master` branch. 

## Testing

Before pushing your code up, make sure you've tested it on as many browsers as possible, and you have tested it on mobile devices too. Try to break your own code, and fix it. 

## Deployment

Once your code has been merged into master and is ready to be deployed, let either Karen or Maggy know.
