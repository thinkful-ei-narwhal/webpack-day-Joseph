import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = (id) => {
  return this.items.find(item => item.id === id);
};

const addItem = (name) => {
  try {
    item.validateName(name);
    this.items.push(name);
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = (id) => {
  let toggleItem = this.findById(id).checked;
  toggleItem = !toggleItem;
};

const findAndUpdateName = (id, newName) => {
  try {
    item.validateName(newName);
    let selectedItem = this.findById(id);
    selectedItem.name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = (id) => {
  let index = this.findById(id);
  this.items.filter(item => item == index);
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
