$(document).ready(function() {
  $(function() {
    $(".navLiItem").hover(
      function() {
        $("#bookNowNavItem").css("background-color", "white");
        $("#bookNowNavItem a").css("color", "black");
        $("#bookNowNavItem, a").css("transition", "all .5s ease");
      },
      function() {
        // on mouseout, reset the background colour
        $("#bookNowNavItem").css("background-color", "#ba8f6a");
        $("#bookNowNavItem a").css("color", "");
      }
    );
  });
});
