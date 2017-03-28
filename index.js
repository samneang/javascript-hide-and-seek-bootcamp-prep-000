function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let listToIncrease = document.querySelectorAll('.ranked-list');
  
  for(let i = 0, l = listToIncrease.length; i < l; i++){
    listToIncrease[i].innerHTML = parseInt(listToIncrease[i].innerHTML) + n;
  }
}

function deepestChild(){
  return document.querySelector('#grand-node');
}