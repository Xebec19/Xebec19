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

  // open dayschedule pop up when user clicks on create-meeting
  $("#create-meeting").on("click", function () {
    // daySchedule.initPopupWidget({
    //   url: "https://rohankumarthakur.dayschedule.com",
    //   type: "popup",
    //   color: {
    //     primary: "#0f0980",
    //     secondary: "#afeefe",
    //   },
    // });
    let customEvent = {
      id: 123,
      categoryId: 123,
      name: "Rohan",
    };
    window.clarity("set", "custom-param", customEvent);
  });
});

window.addEventListener("onload", function () {
  document
    .getElementById("create-meeting")
    .addEventListener("click", function () {
      console.log("fired");
    });
});
