This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Salsify Products Exercise

This is a frontend project exercise from Salsify. You can also check the live site [here](https://salsify-products.herokuapp.com/)

### Run the project
- Go to the project root folder in terminal and run:
```
> npm install
> npm start
```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run the tests
- Go to the project root folder in terminal and run:
```
> npm run test
```
### Project structure
- App.js
  - test folder (contains template test cases)
  - components folder(contains all the needed components)
   - Button.js
   - Data.js
   - Input.js
   - MultiSelection.js
   - SelectionBox.js
   - Table.js
  - datastore.js
  - index.css (contains all the css settings)
  
### Software Design
* This is a React project.
* Since the project is not a big project, I didn't use Redux to manage the state.
* The table contains two parts: filters and data.
* Dataflow should pass the filter first, then render on the table.
* I used four components to help users setup the filter:
  * Selection box, reusable componnt used to setup the `property` and `operator`.
  * MultiSelection, used to setup specific `property` options and enable user to do the multiselection.
  * Button, clear button to reset the filters.
  * Input, only render if the the `property` filter is set to `Contains`, user can type key word here to search.
* Data.js is used to parse the filtered data to the table.
* Table.js, the super component to organize the rest components.

### Software Test
I used `JEST` and `React Testing Library` to do the software test and you can find some test templates under the `__tests__` folder. Compared to the other testing library, I think `React Testing Library` is more like a test library from the perspective of the user. For example, with the help of fireEvent, the JEST can seek the button based on the button text(and users can see the text in the real world)instead of the component id which is defined in the code.
