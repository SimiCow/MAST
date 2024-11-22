# MAST App

## Description

The MAST (Mobile App for Smart Table) app is a React Native application designed for managing a menu system. The app allows for adding menu items, filtering by courses (Starters, Mains, Desserts), and dynamic navigation between screens.

## Changes Summary

### Initial Commit
- **App Structure**: The initial commit set up the basic structure of the app, including the fundamental file setup. The app was prepared to handle the core components like `App.tsx` and included placeholder files and boilerplate for further development.

### Second Commit Part 3
- **Navigation Setup**: The second commit introduced **React Navigation** to the app, allowing for navigation between different screens. The navigation flow was set up using `createStackNavigator`.
  
  **Changes:**
  - Imported `React`, `NavigationContainer`, and `createStackNavigator` to set up the navigation structure.
  - Set up a basic stack navigator to switch between the home screen, filter screen, and other parts of the app.
  
- **Menu Management**: Introduced dynamic management of menu items. A simple menu system was implemented, where users can view menu items and filter them by course type (Starters, Mains, Desserts).
  
  **Changes:**
  - Added a **HomeScreen** to display a list of menu items with their prices.
  - Added filtering functionality by course to allow the user to filter menu items based on categories.
  - Set up basic routing for navigating to and from the `FilterScreen`.

### Final Commit Part 3
- **Menu Item Addition**: The final commit added the ability to add new menu items to the app. This included creating new screens and logic to add, display, and interact with the menu.
  
  **Changes:**
  - Created the **AddMenuItem** screen, which allows users to add new items to the menu.
  - Integrated form handling to input new menu items (name, price, description).
  - Ensured that the new items are dynamically displayed in the Home Screen and Filter Screen after being added.
  
- **UI/UX Enhancements**: Various improvements were made to enhance the user interface, including layout adjustments and additional styling.
  - Updated the UI of the app with custom buttons for navigation and filtering.
  - Added functionality to display detailed descriptions of menu items in the filter view.

## Key Features

- **Menu Display**: View menu items, including name, price, and course category.
- **Dynamic Navigation**: Navigate between different screens, such as Home, Filter, and Add Menu Item.
- **Menu Filtering**: Filter the menu by course type (Starters, Mains, Desserts).
- **Add Menu Items**: Add new menu items with a name, price, and description.
- **UI Enhancements**: Improved UI with custom buttons and better navigation flow.
