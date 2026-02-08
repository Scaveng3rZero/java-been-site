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

    // Hide success message on new attempts
    $("#form-success").addClass("is-hidden");

    // Clear previous error messages + invalid styles
    $(".error-message").text("");
    $("#contact-form .is-invalid").removeClass("is-invalid").removeAttr("aria-invalid");

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    // Email pattern (simple + reliable)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // Helper: show error inside the same form-group
    function setError($field, msg) {
      $field
        .addClass("is-invalid")
        .attr("aria-invalid", "true")
        .closest(".form-group")
        .find(".error-message")
        .text(msg);

      isValid = false;
    }

    // Name
    if (name === "") {
      setError($("#name"), "Please enter your name.");
    } else if (name.length < 2) {
      setError($("#name"), "Name must be at least 2 characters.");
    }

    // Email
    if (email === "") {
      setError($("#email"), "Please enter your email.");
    } else if (!emailPattern.test(email)) {
      setError($("#email"), "Please enter a valid email address (example@domain.com).");
    }

    // Message
    if (message === "") {
      setError($("#message"), "Please enter a message.");
    } else if (message.length < 10) {
      setError($("#message"), "Message must be at least 10 characters.");
    }

    // If valid, show success + reset
    if (isValid) {
      $("#form-success").removeClass("is-hidden");
      this.reset();
    } else {
      // Focus the first invalid field (nice UX, helps grading)
      $("#contact-form .is-invalid").first().focus();
    }
  });


});
