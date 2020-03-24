const validateName = (name) => {
  if (!name) {
    throw new TypeError('Name must not be blank');
  }
  return `${name}`;
};

const create = (name) => {
  return {
    id: cuid(),
    name: name,
    checked: false,
  }
};

export default {
  validateName,
  create,
};