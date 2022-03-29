export const addItemtoFavs = (favsItems, favItemToAdd) => {
  const sameCard = Object.values(favsItems).map((value) =>
    value.id !== favItemToAdd.id ? value : null
  );

  if (sameCard === null) {
    alert(`Card with ${favItemToAdd.id} id already exists`);
    return { ...favsItems };
  }

  return { ...favsItems, [favItemToAdd.id]: { ...favItemToAdd } };
};

export const removeItemFromFavs = (favsItems, favItemToRemove) => {
  const array = Object.values(favsItems).filter((value) =>
    value.id !== favItemToRemove.id ? true : false
  );
  const arrayToObject = (arr, key) => {
    return arr.reduce((obj, item) => {
      obj[item[key]] = item;
      return obj;
    }, {});
  };

  const obj = arrayToObject(array, "id");

  return obj;
};
