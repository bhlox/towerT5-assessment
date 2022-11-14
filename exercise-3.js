// Import the inventory list from exercise-3-data.js and sort it by priority using the array below as reference. See exercise-3-output.txt for the exepected output.

const { inventory } = require("./exercise-3-data");

const brandPriority = [
  { brand: "GOODYEAR", priority: 0 },
  { brand: "DUNLOP", priority: 1 },
  { brand: "TOYO", priority: 2 },
  { brand: "CONTINENTAL", priority: 3 },
  { brand: "MAXXIS", priority: 4 },
  { brand: "DOUBLESTAR", priority: 5 },
];

const inventoryWithPrio = inventory.map((inv) => {
  let arr;
  brandPriority.forEach((item) => {
    if (inv.brand === item.brand) {
      arr = { ...inv, priority: item.priority };
    }
  });
  return arr;
});

const newInventory = inventoryWithPrio
  .sort((a, b) => {
    return a.priority - b.priority;
  })
  .map((item) => {
    return { id: item.id, brand: item.brand, name: item.name };
  });

let sortedInventory = newInventory;
console.log("Sorted Inventory: ", sortedInventory);
