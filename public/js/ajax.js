/* ajax query */
$(document).ready(function () {
  $("#contact-form").submit(function (event) {
    event.preventDefault(); // Prevent form submission
    var formData = $(this).serialize(); // Serialize form data
    $.ajax({
      url: "/send",
      type: "POST",
      data: formData,
      success: function (response) {
        alert("Email sent successfully!");
        $("#contact-form")[0].reset(); // Clear form fields
      },
      error: function (xhr, status, error) {
        alert("An error occurred while Sending mail.");
      },
    });
  });
});
