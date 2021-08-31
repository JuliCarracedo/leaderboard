const getStorage = () =>{
  if (localStorage.getItem('scores') == null){return []};
  let list = JSON.parse(localStorage.getItem('scores'));
  return list;
}

export default getStorage;