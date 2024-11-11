//your JS code here. If required.

$(document).ready(function () {
    // Handle the form submission inside the modal
    $("form").on("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      // Get values from the form inputs
      var email = $("#email").val();
      var password = $("#password").val();
      var confirmPassword = $("#confirmPassword").val();

      // Basic validation
      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // You can process the data here (e.g., send it to a server via AJAX)

      // Clear the form fields after successful submission
      $("#email").val("");
      $("#password").val("");
      $("#confirmPassword").val("");

      // Close the modal
      $("#signupModal").modal("hide");

      // Optionally, show a success message (e.g., alert or Toast notification)
      alert("Account created successfully!");
    });

    // Optional: Auto-focus on the email input when the modal is opened
    $('#signupModal').on('shown.bs.modal', function () {
      $('#email').focus();
    });
  });