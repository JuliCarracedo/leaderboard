const getStorage = () => {
  if (localStorage.getItem('scores') == null) { return []; }
  const list = JSON.parse(localStorage.getItem('scores'));
  return list;
};

export default getStorage;