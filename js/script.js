$(function () {

  // Hamburger menu toggle (mobile)
  $(".hamburger").on("click", function () {
    const expanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!expanded));
    $(".nav").toggleClass("open");
  });

  // Menu tabs (DRINKS / FOOD)
  $(".menu-tab").on("click", function () {
    $(".menu-tab")
      .removeClass("active")
      .attr("aria-selected", "false");

    $(this)
      .addClass("active")
      .attr("aria-selected", "true");

    const target = $(this).data("target");
    $(".menu-panel").addClass("is-hidden");
    $(target).removeClass("is-hidden");

    $("html, body").animate(
      { scrollTop: $(".menu-title").offset().top - 10 },
      200
    );
  });

});

