function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target')
}


function increaseRankBy(n){
  var incRank = document.querySelectorAll('.ranked-list li')
  var a = [];
    for (var i=0; i<incRank.length; i++){
      a.push(parseInt(incRank[i].innerHTML) + n)
    } return a
  }
