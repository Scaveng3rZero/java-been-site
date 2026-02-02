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

  // Contact form validation
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear previous error messages
    $(".error-message").text("");

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "") {
      $("#name").next(".error-message")
        .text("Please enter your name.");
      isValid = false;
    }

    if (email === "") {
      $("#email").next(".error-message")
        .text("Please enter your email.");
      isValid = false;
    } else if (!email.includes("@")) {
      $("#email").next(".error-message")
        .text("Please enter a valid email address.");
      isValid = false;
    }

    if (message === "") {
      $("#message").next(".error-message")
        .text("Please enter a message.");
      isValid = false;
    }

    if (isValid) {
      $("#form-success").removeClass("is-hidden");
      this.reset();
    }
  });

});
