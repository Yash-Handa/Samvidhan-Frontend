document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
  var navbar = document.querySelectorAll('.sidenav');
  M.Sidenav.init(navbar, {});

  var mainPoster = document.querySelectorAll('.parallax');
   M.Parallax.init(mainPoster, {});

   var mainBtn = document.getElementById('btn');
   mainBtn.addEventListener('mouseenter', function () {
     mainBtn.classList.remove('pulse');
   })

   mainBtn.addEventListener('mouseleave', function () {
    mainBtn.classList.add('pulse');
  })
  
  var mainBtn2 = document.getElementById('btn-s');
  var test = document.getElementById('logo-color');
   mainBtn2.addEventListener('mouseenter', function () {
     mainBtn2.classList.remove('pulse');
     test.style.color = '#000080'
   })

   mainBtn2.addEventListener('mouseleave', function () {
    mainBtn2.classList.add('pulse');
    test.style.color = '#ffffff'
  })
});