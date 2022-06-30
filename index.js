window.onload = () => {
  const data = {};
  const $ = window.document.querySelector.bind(window.document);

  document.getElementById('videos').addEventListener('canplaythrough', function () {
    document.getElementById('videos').style = "display:block;"
    document.getElementById('itemLong').style = "display:none;"


  });




  var right = document.getElementById('logo-right');
  var right1 = document.getElementById('logo-right1');

  right.addEventListener('click', (e) => {
    // window.open('https://twitter.com/brownie_pass')
  })
  right1.addEventListener('click', (e) => {
    window.open('https://twitter.com/brownie_pass')
  })


  var box1 = document.getElementById('view-box1');
  var box2 = document.getElementById('view-box2');
  var box3 = document.getElementById('view-box3');
  var box4 = document.getElementById('view-box4');
  var box5 = document.getElementById('view-box5');

  box1.addEventListener('click', (e) => {
    // var box1 = document.getElementById('view-box1');

    var node1 = document.getElementById('group-box1');
    var node2 = document.getElementById('group-box2');
    var node3 = document.getElementById('group-box3');
    var node4 = document.getElementById('group-box4');
    var node5 = document.getElementById('group-box5');
        if(node1.className.indexOf('show') > -1){
          node1.classList.remove("show")
        }else {
          node1.classList.add("show")  
        }

        if(!node2.className.indexOf('show') > -1){
          node2.classList.add("show")  
        }
        if(!node3.className.indexOf('show') > -1){
          node3.classList.add("show")  
        }
        if(!node4.className.indexOf('show') > -1){
          node4.classList.add("show")  
        }
        if(!node5.className.indexOf('show') > -1){
          node5.classList.add("show")  
        }

  })
  box2.addEventListener('click', (e) => {
    var node1 = document.getElementById('group-box1');
    var node2 = document.getElementById('group-box2');
    var node3 = document.getElementById('group-box3');
    var node4 = document.getElementById('group-box4');
    var node5 = document.getElementById('group-box5');
        if(node2.className.indexOf('show') > -1){
          node2.classList.remove("show")
        }else {
          node2.classList.add("show")  
        }

        if(!node1.className.indexOf('show') > -1){
          node1.classList.add("show")  
        }
        if(!node3.className.indexOf('show') > -1){
          node3.classList.add("show")  
        }
        if(!node4.className.indexOf('show') > -1){
          node4.classList.add("show")  
        }
        if(!node5.className.indexOf('show') > -1){
          node5.classList.add("show")  
        }
  })
  box3.addEventListener('click', (e) => {
    var node1 = document.getElementById('group-box1');
    var node2 = document.getElementById('group-box2');
    var node3 = document.getElementById('group-box3');
    var node4 = document.getElementById('group-box4');
    var node5 = document.getElementById('group-box5');
        if(node3.className.indexOf('show') > -1){
          node3.classList.remove("show")
        }else {
          node3.classList.add("show")  
        }

        if(!node2.className.indexOf('show') > -1){
          node2.classList.add("show")  
        }
        if(!node1.className.indexOf('show') > -1){
          node1.classList.add("show")  
        }
        if(!node4.className.indexOf('show') > -1){
          node4.classList.add("show")  
        }
        if(!node5.className.indexOf('show') > -1){
          node5.classList.add("show")  
        }
  })
  box4.addEventListener('click', (e) => {
    var node1 = document.getElementById('group-box1');
    var node2 = document.getElementById('group-box2');
    var node3 = document.getElementById('group-box3');
    var node4 = document.getElementById('group-box4');
    var node5 = document.getElementById('group-box5');
        if(node4.className.indexOf('show') > -1){
          node4.classList.remove("show")
        }else {
          node4.classList.add("show")  
        }

        if(!node2.className.indexOf('show') > -1){
          node2.classList.add("show")  
        }
        if(!node3.className.indexOf('show') > -1){
          node3.classList.add("show")  
        }
        if(!node1.className.indexOf('show') > -1){
          node1.classList.add("show")  
        }
        if(!node5.className.indexOf('show') > -1){
          node5.classList.add("show")  
        }
  })
  box5.addEventListener('click', (e) => {
    var node1 = document.getElementById('group-box1');
    var node2 = document.getElementById('group-box2');
    var node3 = document.getElementById('group-box3');
    var node4 = document.getElementById('group-box4');
    var node5 = document.getElementById('group-box5');
        if(node5.className.indexOf('show') > -1){
          node5.classList.remove("show")
        }else {
          node5.classList.add("show")  
        }

        if(!node2.className.indexOf('show') > -1){
          node2.classList.add("show")  
        }
        if(!node3.className.indexOf('show') > -1){
          node3.classList.add("show")  
        }
        if(!node4.className.indexOf('show') > -1){
          node4.classList.add("show")  
        }
        if(!node1.className.indexOf('show') > -1){
          node1.classList.add("show")  
        }
  })


};
