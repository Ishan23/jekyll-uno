---
  layout: null
sitemap:
exclude: 'yes'
---

  $(document).ready(function () {
    {% if site.disable_landing_page != true %}
    $('a.blog-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
      }
    })

    blog = document.getElementById("about1")
    about = document.getElementById("blog2")

    if (window.location.hash && window.location.hash == '#about') {
      $('.panel-cover').addClass('panel-cover--collapsed')
      blog.style.display = "block" // hide
      about.style.display = "none"; // unhide
    }

    if (window.location.hash && window.location.hash == '#blog') {
      $('.panel-cover').addClass('panel-cover--collapsed')
      about.style.display = "block" // hide
      blog.style.display = "none"; // unhide
    }

    if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
    {% endif %}

    $('.btn-mobile-menu').click(function () {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .blog-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

  })


  function f(elem1,elem2) {
    var e1 = document.getElementById(elem1);
    var e2 = document.getElementById(elem2);
    
    e1.style.display = "none"; // hide
    e2.style.display = "block"; // unhide

  }
  window.onhashchange = function()  {

    blog = document.getElementById("about1")
    about = document.getElementById("blog2")

    var hash = window.location.hash.substring(1)

    if (hash == "about")
    {
      blog.style.display = "block" // hide
      about.style.display = "none"; // unhide
    }
    else if (hash == "blog")
    {
      about.style.display = "block" // hide
      blog.style.display = "none"; // unhide
    }
   }