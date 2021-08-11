07/30/2021: I used the references below to organize and design my calculator. I looked at an article on dev.to and one on freeCodeCamp. This one went over the design in detail. 
References
https://freshman.tech/calculator/
https://floating-point-gui.de/basic/
https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#toggling-themes
https://designdrastic.com/tutorial/create-a-darklight-or-custom-color-theme-using-css-and-javascript

07/31/2021: Learned about using data-attributes in html to select using js. 
https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/
Learning about SASS forward and use. Also learned that if I am using the VSCode SASS compiler I still need to use import. Learned that putting $ at the end of certain variables in Js allows you to use them. 

08/01/2021: My theme switcher worked and I was able to use SASS variables for dark mode and themes. 
[Dark Mode with Sass and CSS Variables](https://dev.to/zetareticoli/dark-mode-with-sass-and-css-variables-4f9b)
Now I am working on the calculator function with js. Used a switch statement for theme js and for key addEventListener. 
Working on the keypad. Referring to an earlier resource for setting up the keypad grid. No matter how many times that I use grid, I still have to refer to examples. 
Resources
[CSS Grid Calculator](https://freshman.tech/css-grid-calculator/)

08/02/2021: Today I am focusing on styling the calculator header and keypad. Still learning how to work with z-index, position, and opacity. The toggle-switch label was made with a z-index of 5. The input was had an absolute position and and opacity of 0. 

08/03/2021: Forgot to add that I used CSS grid to help position the keys and the reset/equal button. 
Resources: 
[CSS Grid Calculator](https://freshman.tech/css-grid-calculator/)

08/08/2021: Today I'm going through and adjusing the sizing on the calculator. I've been reading articles about using relative units to add responsive styling to the webpage. I added the active and hover states to the keypad buttons. My next task is to add a function to place comma in input number according to place value. 

### 08/09/2021:
I tried to research how to add a function to place commas in my input number. I wasn't understanding how to refactor my code to add the function, so I started a new script file. I followed a tutorial by Web Dev Simplified. 

Resources: 
[Build a Calculator with JavaScript Tutorial](https://www.youtube.com/watch?v=j59qQ7YWLxw)
[Vanilla JavaScript Calculator](https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator/blob/master/index.html)

### 08/10/2021: 
My numbers were not showing up on the display. I found a solution on Stack Overflow. Initially the display div was being set to the array for the buttons, not the innerHTML for the button. 

Resources:
[Stack Overflow](https://stackoverflow.com/questions/53089348/javascript-dom-calculator-display-digits-on-a-screen)

### 08/11/2021
Day 2 of working on my new JS file for the calculator. I made functions for each operation and  function key. I ended up using innertext and it worked well. I'm learning more about how to organize my code especially my functions. I decided to add a border outline to the screen, keypad, and toggle. I think it helps the elements stand out more on the page. 