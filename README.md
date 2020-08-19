<p align="center">
  <a href="https://jcqlng.github.io/clicky-game/">
    <img width=100% src="/public/assets/images/Zbanner.png">
  </a>
</p>


# 🧠 Zelda Clicky Game 🧠
An app that tests your memory!!

## 📝 Description 📝
Link to the application: https://jcqlng.github.io/clicky-game/

In this app you will see 12 cards that have characters from a favorite game of mine, The Legend of Zelda. The purpose of the game is to test your memory by allowing you to click on a card. Once the card is clicked, they shuffle out of order and you will click on a different card each click. You can not choose the same card or it will be considered a loss and you will get a "Game over" pop-up and restarts the game once okay is clicked. 

## 🖥️ Deployment on GitHub pages 🖥️
1. Open the terminal and type ```npm i gh-pages```
2. Once GH-pages is installed, go ahead and add this to your terminal ```npm install gh-pages --save-dev```
3. Got to the package.json file and add ```"homepage": "https://jcqlng.github.io/clicky-game/" ``` above the dependencies
4. Scroll down then go to scripts and type in at the end ``` "predeploy": "npm run build",
    "deploy": "gh-pages -d build" ```
5. When this is all complete, make a push to github. It will push from the gh-pages branch.
6. Run ``` npm deploy``` in the terminal
7. Your website will be published through GitHub and ready for use. 

## ⛓️ Technologies and Dependencies ⛓️
* :atom: React 
* 👾 NPM packages:
    - [NPM I](https://www.npmjs.com/package/npm-install)
    - [gh-pages](https://www.npmjs.com/package/gh-pages)
* 👾 JavaScript
* 👾 HTML
* 👾 CSS 
* 👾 Bootstrap

## 🔗 Resources and Links 🔗
* 💻 [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* 💻 [React documentation](https://reactjs.org/)
* 💻 [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
* 💻 [Create React App](https://github.com/facebook/create-react-app)
* 💻 [running NPM tests](https://facebook.github.io/create-react-app/docs/running-tests)
* 💻 Helpful [DEV article](https://dev.to/lucvankerkvoort/react-memory-game-2ep9)
* 💻 [Babel](https://babeljs.io/docs/en/)
* 💻 [Components and Props](https://reactjs.org/docs/components-and-props.html#es6-classes)
* 💻 [JSX](https://reactjs.org/docs/introducing-jsx.html)
* 💻 Another good [DEV web forum](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) on how to deploy a React app to GitHub incase you get stuck!
