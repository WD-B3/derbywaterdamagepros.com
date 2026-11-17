(function(){
  var btn=document.querySelector('.menubtn'),menu=document.getElementById('mobmenu');
  if(btn&&menu){btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');btn.setAttribute('aria-label',o?'Close menu':'Open menu');});}
  var drops=document.querySelectorAll('li.hasdrop>button.navbtn');
  drops.forEach(function(b){b.addEventListener('click',function(e){var li=b.parentNode,o=li.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');drops.forEach(function(x){if(x!==b){x.parentNode.classList.remove('open');x.setAttribute('aria-expanded','false');}});e.stopPropagation();});});
  document.addEventListener('click',function(){drops.forEach(function(x){x.parentNode.classList.remove('open');x.setAttribute('aria-expanded','false');});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){drops.forEach(function(x){x.parentNode.classList.remove('open');});if(menu){menu.classList.remove('open');}}});
})();
