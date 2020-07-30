# Favorite Fonts

Favorite Fonts is a Google Fonts clone built using the Google Fonts API for the Chingu Solo Project. 
Built using REACT and Next.Js.
Utilizes react-intersection-observer for lazy loading.
Styling via styled-jsx.

The live demo for this project is available here at [favfonts](https://favfonts.now.sh/)

It addresses the requirements for the Chingu Tier 3 Project. 

## Functionality

- [x] Nav with Major navigation / page-manipulation (search, custom text, font-size, dark/light mode, grid/list mode, and reset)
- [x] Main section for the font cards
- [x] Font cards which display the Font Name, the sample text, and an add button
- [x] Button that allows user to click and scroll back up to the top
- [x] Sample text in each card displayed in the corresponding font
- [x] Handles overflow from sample text in font cards
- [x] Text typed into the custom text (type something) box immediately changes the sample text in each font card
- [x] The sample text should return to the default sample if the input box (type something) no longer has any input
- [x] Font size chooser has at least four sizes and immediately changes the sample text font size in each font card
- [x] 'Reset' icon on the far right of the major navigation; it should reset the page as if it were reloaded without actaully reloading the page
- [x] On load, the page should display fonts sorted by current popularity, as returned by the Google Fonts Developer API (server side call)
- [x] The search feature fully functional and display matching fonts
- [x] When the search input is cleared (via reset button or manually), the fonts display sorted by poplarity again
- [x] Fonts from the Developer API retrieved on the back-end and sent to the client
- [x] Fully responsive (small/large/portrait/landscape, etc.)
- [x] Implement the light/dark mode toggle buttons
- [x] Implement the change display icon so you can flip between a grid layout and a list layout for the font cards

## Running Locally

Feel free to fork and clone to your local. Here's a great guide on how to do that [Forking Workflow Guide](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
