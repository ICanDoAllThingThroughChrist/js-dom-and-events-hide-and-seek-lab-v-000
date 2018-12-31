function getFirstSelector(selector) {
  // debugger;
  return document.querySelector(selector);
  // debugger;
}

function nestedTarget() {
  debugger;
  return document.querySelector( '#nested .target' )//parameters of querySelector are #id, and .class
  debugger;
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list');
  debugger;
  for (let i = 0; i < list.length; i++) {
  debugger;
    list[i].innerHTML = parseInt(list[i]) + n;
  }
  debugger;
}

// var container = document.querySelector("#userlist");
// var matches = container.querySelectorAll("li[data-active='1']");

function deepestChild() {
  let container = document.querySelector("#grand-node");
  let child = container.querySelectorAll("div");
  debugger;
  return child[child.length - 1].innerHTML;
  debugger;
}
