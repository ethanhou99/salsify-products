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

### Time
I spent three afternoons on this project, from Nov. 9 to Nov. 11. More details can be checked in the commit.

### Assumptions
* This is an independent project and will not linked to some big projects in the future.
* User may access this project through laptop or cellphone, so I slightly adjusted the CSS code to make it more mobile-friendly(better than none).
* More datatype and properties and operators will be added to the datastore.js, the filter logic is designed extensible(Check Software Design section to see more details).
* The data size is limited, otherwise I'll only show few data on each table page.

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
  * SelectionBox, reusable component used to setup the `property` and `operator`.
  * MultiSelection, used to setup specific `property` options and enable user to do the multiselection.
  * Button, clear button to reset the filters.
  * Input, only render if the the `property` filter is set to `Contains`, user can type key word here to search.
* Data.js is used to parse the filtered data to the table.
* Table.js, the super component to organize the rest components.
* More about the filters:
  * The `operator` filter is rendered based on the datatype of the `property` filter, if more `properties` added in the future the current filter setting will work as well.
  * Before render the product data to the table, the product data will pass different filters. All the filters are set based on the `property_id`. If someone changed the datastore format, as long as the `property_id` is redefined properly, we don't need to change the filter setting.
  * MultiSection component is different to the SelectionBox because users may select multiple options and multiselection box is more friendly to do the multiselection. Users don't need to click select and choose option from the drop down list.

### Software Test
I used `JEST` and `React Testing Library` to do the software test and you can find some test templates under the `__tests__` folder. Compared to the other testing library, I think `React Testing Library` is more like a test library from the perspective of the user. For example, with the help of fireEvent, the JEST can seek the button based on the button text(and users can see the text in the real world)instead of the component id which is defined in the code.
