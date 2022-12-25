`use strict`;

$(document).ready(function () {
  $(".suspend").click(function () {
    $(this).css({ display: "none" });
    $(this).prev().css({ display: "inline" });
  });
  $(".expand").click(function () {
    $(this).css({ display: "none" });
    $(this).next().css({ display: "inline" });
  });
});
