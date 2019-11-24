$(document).ready(function() {
  $(function() {
    $(".navLiItem").hover(
      function() {
        $("#bookNowNavItem").css("background-color", "rgba(0, 0, 0, 0)");
        $("#bookNowNavItem a").css("color", "white");
        $("#bookNowNavItem, a").css("transition", "all .8s ease");
      },
      function() {
        // on mouseout, reset the background colour
        $("#bookNowNavItem").css("background-color", "#ba8f6a");
        $("#bookNowNavItem a").css("color", "");
      }
    );
  });
});
