$(document).ready(function() {
    $("#demoForm").validate({
        rules: {
            email: {
                email: true,
            },
        },
        messages: {
            email: {
                email: "Please enter a valid email address",
            }
        }
    });
});
