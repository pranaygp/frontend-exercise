# Frontend Exercise

This exercise is intended for you to get familiar with fundamental [React](https://reactjs.org/) concepts in an interactive way, as well as for you to get comfortable developing in a modern [Node.js](https://nodejs.org/en/) environment. 

This project will be broken down into multiple parts. Each part will cover a fundamental React/frontend concept. After you finish this project, submit a pull request and assign your tech lead to review it! 

This exercise is due before the next all hands meeting (Sunday Feb 18th). However, the sooner you put up your PR, the sooner you will get a review, and the faster you will get feedback and learn!

### Guidance
We understand that a lot of you are new to React and frontend development in general. We think going through this exercise will really help you get up to speed in order to start being productive contributing to your nonprofit project. 

[The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) will be very beneficial to go through to get a complete understanding on React fundamentals. We also want you to get comfortable diving into [React Docs](https://reactjs.org/docs/hello-world.html) and [Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) as part of this exercise. 

A lot of what makes a good software developer is being resourceful and knowing where/how to find information you need. At the same time, the entire Hack4Impact community is available if you get stuck, have unanswered questions, or want to discuss anything!

If you have any questions about javascript as a language and its features or syntax, ask/discuss in the `#javascript` Slack channel.

If you have any questions about React, styling, or other frontend related concerns, ask/discuss in the `#frontend` Slack channel.

And of course, if you are already familiar with this or have figured it out, please also hop in these channels and help those who need it! :)

### Requirements
* node version 8.x
* npm version 5.x

Install node and npm [here](https://nodejs.org/en/download/).

Check if you have the correct versions by running the following commands in your terminal:
```
node -v
```
```
npm -v
```

### Setup

Install the [React Devtools](https://github.com/facebook/react-devtools) to easily debug and see what's going on in your React app.

Open up your terminal and navigate to the directory you want this project in. Then clone this repository by running:
```
git clone https://github.com/hack4impact-uiuc/frontend-exercise.git
```

Go into the newly cloned directory:
```
cd frontend-exercise
```

Install project dependencies:
```
npm install
```
 
After that's done, run this to start development:
```
npm start
```

This will start running the app and automatically open it at [http://localhost:3000](http://localhost:3000). Anytime you change and save the code, it will automatically reload!

Before you make any changes to the code, make sure to create a new branch. Typically branches are named based on the feature or bugfix being addressed, but for this project, name your branch with your own name so your reviewer can easily follow:
```
git checkout -b <YOUR_NAME> 
```

### Optional Setup
Prettier is a tool that automatically reformats your code to follow a certain set of coding style guidelines. It is configured to run automatically before each commit. This makes sure all of our code follows the same code styles, enforcing good practices and minimizing conflicts.

It is definitely not necessary for this exercise, but there are prettier plugins you can install for your editor. See instructions [here](https://github.com/prettier/prettier#editor-integration).

## Part 1
Goal: Get familiar with JSX syntax, component structure, and passing props

Tasks: 
* Send a `shouldDisplayImage` prop into the `Instructions` component that determines whether or not to display the H4I logo 
* Make sure to set the `PropTypes` accordingly anytime you pass in props to a component. [Hint](https://egghead.io/lessons/react-validate-custom-react-component-props-with-proptypes)

Once you're done, make a commit to your branch with the message "Part 1 Complete." Do they same for each part so your tech lead can follow your process for each step.

## Part 2
Goal: Get familiar with rendering lists and javascript array functions

Tasks: 
* Send an `items` prop into the `Instructions` component which contains a list of strings
* Display a bullet point list of all the `items`
* "Clean" the `items` by removing empty strings and trimming the whitespace around strings
* Make _every other_ list item uppercase
* Do this without using `for` or `while` loops
* Very useful videos to watch: 
 * [Functional Programming Intro](https://www.youtube.com/watch?v=BMUiFMZr7vk&index=1&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) - just the first two videos are enough, although you only have a lot more to learn by watching the rest of the playlist
 * [Rendering lists in React](https://egghead.io/lessons/egghead-use-the-key-prop-when-rendering-a-list-with-react)

## Part 3
Goal: Get familiar with component state

Tasks: 
* Create a new `Counter` component
* Set its initial state of `count` to `0`
* Display the value of the current count
* Create two buttons, one that increments the count and one that decrements it. [Hint](https://egghead.io/lessons/react-use-component-state-with-react)

## Part 4
Goal: Get familiar with user input

Tasks:
* In `App.js`, make an input that sets an `initialCount` state
* Pass the `initialCount` state into the `Counter` component, and use this value as the initial `count` in the `Counter`
* Validate the user input to make sure it's valid
* Bonus: show UI feedback if user input is invalid (a simple message will do)

## Part 5
Goal: Understand state/props communication between sibling components

Tasks:
* Move the `input` into its own component which is a child of the `App` component
* Maintain that the functionality of being able to set the initial count of the counter works

## Part 6
Goal: Get familiar with CSS/SCSS and styling

Tasks: Nothing specific, play around with styling!

Some styling related resources:
* [Learn Layout](http://learnlayout.com/)
* [A Complete Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [BEM Pattern](https://css-tricks.com/bem-101/)

### Submitting
When you're done with all the steps, open a pull request (PR) and assign your tech lead to review it!

Before you can submit a PR, you'll have to push your branch to a remote branch (the one that's on GitHub, not local). 

Check to see that you're on your branch:
```
git branch
```

If you want to make sure all of your commits are in:
```
git log
```
Press `Q` to quit the `git log` screen.

Push your commits to your remote branch:
```
git push
```

The first time you do this, you might get an error since your remote branch doesn't exist yet. Usually it will tell you the correct command to use:
```
git push --set-upstream origin <YOUR_BRANCH_NAME>
```
Note: this only needs to be done the first time you push a new branch. You can use just `git push` afterwards.

Follow the instructions on the [wiki](https://github.com/hack4impact-uiuc/wiki/wiki/Git-Reference-Guide#opening-a-pull-request-pr-on-github) to open the PR.


### Resources
[MDN - A reintroduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)<br>
[The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-reactjs)<br>
[React Docs](https://reactjs.org/docs/hello-world.html)
[Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript)
[Airbnb's React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
[Airbnb's CSS Style Guide](https://github.com/airbnb/css)

```
H A C K 4 I M P A C T
                    H A C K 4 I M P A C T
                                        H A C K 4 I M P A C T
                                                            H A C K 4 I M P A C T
                                                                                H A C K 4 I M P A C T
```

