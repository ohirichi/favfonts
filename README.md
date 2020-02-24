# favfonts

Favorite Fonts is a Google Fonts clone built using the Google Fonts API for the Chingu Solo Project.

It addresses the following requirements from the Chingu Tier 3 Favorite Fonts Project: 

## Structure

- [x] Header with minor navigation (Logo and Catalog/Featured/Articles/About link list)
- [x] Nav with Major navigation / page-manipulation (search, custom text, font-size, dark/light mode, grid/list mode, and reset)
- [x] Main section for the font cards
- [x] Font cards which display the Font Name, the sample text, and an add button (the font creator is not available via the api, so it is not required in tiers 2 or 3)
- [x] Button that allows user to click and scroll back up to the top (there could be up to 959 fonts displayed, so you need this!)
- [x] Footer section with your developer information

## Style

- [x] Sample text in each card should be displayed in the corresponding font
- [x] Buttons/links should be evident (make sure the cursor changes, etc.)
- [ ] Implement a way to handle overflow from sample text in font cards, as the font size is adjustable

## Functionality

- [x] Text typed into the custom text (type something) box should immediately change the sample text in each font card
- [x] The sample text should return to the default sample if the input box (type something) no longer has any input
- [x] Font size chooser should have at least four sizes and should immediately change the sample text font size in each font card
- [x] Implement the 'reset' icon on the far right of the major navigation; it should reset the page as if it were reloaded (do not actaully reload the page)
- [x] On load, the page should display fonts sorted by current popularity, as returned by the Google Fonts Developer API (see below); this call should be server-side
- [x] The search feature should be fully functional and display matching fonts (it's up to you if you want to do this via a 'submit' or through onchange)
 - [x] When the search input is cleared (via reset button or manually), the fonts should automaticaly display sorted by poplarity again
 - [x] Fonts from the Developer API should be retrieved on the back-end and sent to the client (see below)
 - [x] StyleSheet requests from the Google Fonts API can be compiled on either the front or the back

## Other

- [x] Your repo needs to have a robust README.md
- [x] Make sure that there are no errors in the developer console before submitting

##Extras (Not Required)

- [x] Make your design fully responsive (small/large/portrait/landscape, etc.)
- [x] Implement the light/dark mode toggle buttons
- [x] Implement the change display icon so you can flip between a grid layout and a list layout for the font cards
