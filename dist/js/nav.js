function moveIndicator(o){$indicator.css({left:o.position().left,width:o.width(),backgroundColor:o.css("color")})}var w=$(window).width(),toggle=$("#toggle-menu"),menu=$("nav ul"),hasChild=$(".has-child"),dropdown=$(".dropdown");$(function(){$(toggle).on("click",function(o){o.preventDefault(),menu.toggle()}),$(hasChild).click(function(o){o.preventDefault(),dropdown.toggle()})}),$(window).resize(function(){w>320&&menu.is(":hidden")&&menu.removeAttr("style")});var $active,$indicator,resetTimer;$("nav .targeted").mouseover(function(){clearTimeout(resetTimer),moveIndicator($(this))}).mouseout(function(){resetTimer=setTimeout(function(){moveIndicator($active)},500)}),$(window).on("resize",function(){moveIndicator($active)}),$(function(){$active=$("#active"),$indicator=$("#indicator"),moveIndicator($active)}),$(function(){var o=0;$(window).scroll(function(e){var i=$(this).scrollTop();Math.abs(o-i)<=5||(i>o?$("nav").addClass("nav-hide"):$("nav").removeClass("nav-hide"),o=i)})});