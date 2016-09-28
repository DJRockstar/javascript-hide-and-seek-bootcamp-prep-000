function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target')
}

var incRank = document.querySelectorAll('.ranked-list li')
function increaseRankBy(n){
    for (var i=0; i<incRank.length; i++){
      incRank[i].innerHTML = (parseInt(incRank[i].innerHTML) + n)
    }
  }
// var deepDiv = document.querySelector('#grand-node div div div div').innerHTML
var topDiv = document.querySelectorAll('#grand-node')
function deepestChild(){
  var topDiv = document.querySelectorAll('#grand-node')
    for(var i=0; i<topDiv.length; i++){
      var deepDiv = topDiv[i]
      return deepDiv
    }
}
