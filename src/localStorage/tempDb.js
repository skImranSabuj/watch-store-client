// use local storage as your db for now
const addToDb = (_id) => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[_id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[_id]) {
      const newCount = shopping_cart[_id] + 1;
      shopping_cart[_id] = newCount;
    }
    else {
      shopping_cart[_id] = 1;

    }
  }
  updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');

const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = _id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[_id];
    updateDb(shopping_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }