import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addItem = (name) => {
  try {
    item.validateName(name);
    items.push(item.create(name));
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = (id) => {
  let toggleItem = findById(id);
  toggleItem.checked = !toggleItem.checked;
};

const findAndUpdateName = (id, newName) => {
  try {
    item.validateName(newName);
    let selectedItem = findById(id);
    selectedItem.name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = (id) => {
  const index = findById(id);
  items.splice(index, 1);
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
};
