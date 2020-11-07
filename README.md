# Workshop 6: Web Testing and Debugging

**Workshop External Resources**

  *  Youtube Recording: Coming soon
  *  Slides: [https://docs.google.com/presentation/d/1ZM5wkpM7QFGZCIIYHYxNa1jaf1R2G7E5eZmQsPsXvPg/edit?usp=sharing](https://docs.google.com/presentation/d/1ZM5wkpM7QFGZCIIYHYxNa1jaf1R2G7E5eZmQsPsXvPg/edit?usp=sharing)
  * Kahoot: []()
  * Oasis Starting Guide: [https://github.com/northeastern-oasis/Ultimate-Oasis-Starting-Guide/tree/master/web-testing](https://github.com/northeastern-oasis/Ultimate-Oasis-Starting-Guide/tree/master/web-testing)

Congratulations on starting to learn about testing on the web! If you've done testing on the desktop with tools like Racket check-expect or JUnit, this should come naturally to you. And if not, be sure to check out the slides and move step by step and you'll be fine! Testing is a skill that will serve you well in your personal projects.

The interactive portion of this workshop will focus on examining various options available for us to test our apps using a library called [Jest](https://jestjs.io/), which makes it very easy to get started.

## Getting Started

We will be working on our local file system because we will need to use the command-line tools to test our application. Therefore, you will need to **clone** this repository to work with the files on your machine. Instructions for doing so are as follows:

### Cloning Repo

1. At the top of this page, click the green **Code** button and copy the HTTPS string to your clipboard.
2. Open Terminal (Mac) or Command Prompt (Windows). Take note of which folder you are in based on what it says in the window. Change this if you know how (`cd FILE_PATH`), but if not no worries
3. Type `git clone REPO_URL`, where REPO_URL is the repository URL you copied in step 1
4. Go to the folder that your terminal window was at to find the files!


## During the workshop

As mentioned, we will inspect various ways you can test your code using Jest. We'll follow the steps below!

### 0. Installing Jest

Installing Jest is very easy--we will use `npm` (Node Package Manager) to add it to our project, as we do with most JavaScript libraries.

Open a terminal window in the root of your project, so at the same level as the package.json file, src folder, tests folder, etc

In the terminal window, type `npm install jest`. And that's it! You should be ready to go now

### 1. Folder Structure + A First Test

Let's start by taking a look at the folders we have to work with.

- **public**: Holds our app's HTML entry point--no need to edit
- **src**: Holds our app's source code--any code we write that is necessary for the app to function. The **util** folder within here holds functions we'll be testing
- **tests**: Holds the tests we'll write for our app. It's common practice to keep this separate from source code
- **node_modules**: Holds the code from third-party libraries we're using, like Jest. You may not have this yet--be sure you run `npm install`

Now let's write our first test! First let's check out the function we're testing. Head over to the **src/util** folder and open `timesThree.test.js`. 

Let's examine this for a second--what does it do? To make sure it works as intended, we're going to finish writing a test for this function.

Head back to the root **tests** folder and open `timesThree.test.js`. This is a basic Jest test that is analogous to a `check-expect` statement. Notice the structure of it:

```
test('WHAT THE TEST DOES', () => {
    expect(FUNCTION(arg1, arg2, ...)).toBe(EXPECTED_VALUE)
});
```

**TODO:**
Can you fix this test so it will pass?

Once you've fixed the test, let's try running our tests to make sure that they are truly passing! Open a terminal window in the project root (just as you did to install Jest) or use the same one from earlier.

Type `npm test` to run your tests and observe the output in the terminal window. Did your tests pass?



### 2. Testing Part 1: Using Matchers

Let's write some fancier testing code. Jest uses a system called [matchers](https://jestjs.io/docs/en/using-matchers) to allow us to test values in our code. There are many matchers available, which can be outlined more in the following page:

[https://jestjs.io/docs/en/using-matchers](https://jestjs.io/docs/en/using-matchers)

Before, we were just testing to see if our code outputted a certain value, but we can also check if it outputs a certain JavaScript object, outputs a value greater than another value, does *not* output a certain value, and much more. Let's try some!

**TODO:**
Inspect the file `src/utils/isEven.js`. What does it do? Let's test is! In the file `tests/isEven.test.js`, finish writing the test method to make sure the function works as expected. 

Use this section of the docs for reference: [https://jestjs.io/docs/en/using-matchers#truthiness](https://jestjs.io/docs/en/using-matchers#truthiness).

Note that you can write multiple tests within the same method!  


**TODO:**

Create a new file called isBigString in the `src/util`, which holds a function called isBigString. This function will take two arguments--the first being a string, and the second being a number--and return true if the string is longer than the given number. It returns false otherwise. Create a new test file making sure this works in the test folder. Make sure to test edge cases!

### 3. Testing Part 2: Using Storybook

Another useful tool we have at our disposal is a library called Storybook. Storybook essentially allows us to render our React components in a useful view to make sure they look how they're supposed to. 

We're going to view a basic story to see how this works!

To run the story, run `npm run storybook`. We're going to take a look at this now

### 4. Testing Part 3: Developer Tools

The final thing we want to talk about are the developer tools that we have at our disposal in the browser. Let's navigate to the browser and open those up to try them out one-by-one!

The first tool is the inspector. This allows us to change and highlight HTML elements in the page. To pick one out, we can use the **Inspector** tool in the top-left corner to grab any element from the page. 

**TODO:** Go to your favorite site and use the selector to grab a text block. Try changing the text inside of it within the developer tools. What happens here?

The next tool we'll look at is the console. When our apps output to the console, it shows up here. We can also run JavaScript code from within here!

**TODO:** Run some JavaScript code, using the following as inspiration:\

`let foo = 5`

`alert(foo)`

`let name = prompt("What is your name?)`

`alert(name)`


The console is a great place to test our JavaScript code and see it run immediately. Have fun playing around!
