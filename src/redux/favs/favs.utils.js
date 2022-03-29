export const addItemToFavs = (favsItems, favItemToAdd) => {
  const existingCartItem = favsItems.find(
    (cartItem) => cartItem.id === favItemToAdd.id
  );

  if (existingCartItem) {
    return favsItems.filter((favItem) => !(favsItems.id === favItemToAdd.id));
  }

  return [...favsItems, { ...favItemToAdd }];
};

export const removeItemFromFavs = (favsItems, favItemToRemove) => {
  return favsItems.map((favsItem) =>
    !(favsItem.id === favItemToRemove.id) ? favsItem : false
  );
};
