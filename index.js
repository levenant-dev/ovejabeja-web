$(".checkbox-container").click(function () {
  const checkbox = $(this).children("input");
  const checkmark = $(this).children(".checkbox-square");
  // toggle checked
  checkbox.attr("checked", !checkbox.attr("checked"));
  checkmark.toggleClass("checkbox-selected");
});

$('.counter').counterUp();