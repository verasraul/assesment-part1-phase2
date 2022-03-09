 
// Part 1: 30%, you must create a repo for part 1, separate from part 2
 

// Why does React utilize the virtual-dom?
    // In ReactJS, the virtual DOM is used to create or store a replica of the real DOM in memory.
    // The concept of using a virtual representation of the DOM, allows ReactJS to load or render pages much faster than the normal way of interacting with the DOM in Javascript. 
    // React does this by splitting up the user interface into different modules called components with each component holding its own state and if the state of the component changes, the state is then checked againgst the real DOM to ensure changes correspond.
 

 
// 2a How is data flowed in React? 2b. Why is React architected this way?
    // In React the data only flows one way, like a one-way street. React is architectured this way for optimal performance and makes it less prone to errors.
    // This allows for easier debugging when the developer needs to examine where the data is coming from, how it's being accessed and how it's being transferred.


 
// 3. What is the purpose for lifting state up in React? Give an example of this
    // The purpose of lifting state up in React is to allow 2 child components to aquire or share the same data.
    // An example of this would be if you have user data on a main page and you need to utilize that data in in 2 separate other pages you'll need to lift the state of the 
    // 2 page (child components) in order for both of them to have access to the data.
 

// 4. Why would a startup be interested in applying React-Router to a project? Explain in detail.
    // For a web app, React routing is useful for creating and navigating between multiple URLS and pages.
    // It allows an app to switch between components (pages) while maintaining users in the current state.
    // React could be appealing to a startup since developing a fully working full-stack software takes less time than with other frameworks, allows for easier debugging and cleaner code.

 
// 5. Can browsers read JSX? Why?
    // Broswers cannot read JSX because they can't understand it to process it. In general most browsers natively can't read past JS ES5 and need a compiler 
    // in order to process JSX.
 
// 6. What is the significance of keys in React? 
    // Keys allows you to access data similar to how props is utilized in React.

 
// 7. What is the difference between Props and State?
    // Props in react are properties that are passed into components like arguments to a function.
    // Components can have default properties, which allow them to be set even if a prop is null or not passed and props are considered immutable or not scheduled to  change.
    // State, contains information about the component, but the type of information and how it is handled differ significantly. Default value for state is null.
    // When a component needs to track information between renderings so that it can create, update, and use the state, it would use state. 
 
// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
 
// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )
 
// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })
 
// 9. Given the array of strings: names, return a new array with each name properly capitalized. Must use .map() 
// const names = [ “James”, “Joseph”, “Diamond”, “Gillian”]
// function properNames(names) {
 
// }
 
// 10. Create an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Function smallWordsOnly(arr) {} 
 
 
 
 

