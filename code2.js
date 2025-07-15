class Restaurant {
  constructor() {
    this.menu = {
      "chicken briyani": {
        name: "chicken briyani",
        cuisine: "south asia",
        type: "non veg",
        available: true
      }
    };
  }

  // a. Display all food available
  displayMenu() {
    console.log("Menu Items:");
    for (const item in this.menu) {
      console.log(`${item}:`, this.menu[item]);
    }
  }

  // b. Add new food item
  addFoodItem(itemName, details) {
    if (this.menu[itemName]) {
      console.log(`${itemName} already exists in the menu.`);
    } else {
      this.menu[itemName] = details;
      console.log(`${itemName} added to the menu.`);
    }
  }

  // c. Update availability of existing food
  updateAvailability(itemName, availability) {
    if (this.menu[itemName]) {
      this.menu[itemName].available = availability;
      console.log(`${itemName} availability updated to ${availability}.`);
    } else {
      console.log(`${itemName} not found in the menu.`);
    }
  }

  // d. Delete food item
  deleteFoodItem(itemName) {
    if (this.menu[itemName]) {
      delete this.menu[itemName];
      console.log(`${itemName} removed from the menu.`);
    } else {
      console.log(`${itemName} not found in the menu.`);
    }
  }
}
const myRestaurant = new Restaurant();

myRestaurant.displayMenu();

myRestaurant.addFoodItem("paneer tikka", {
  name: "paneer tikka",
  cuisine: "indian",
  type: "veg",
  available: true
});

myRestaurant.updateAvailability("chicken briyani", false);

myRestaurant.deleteFoodItem("paneer tikka");

myRestaurant.displayMenu();
