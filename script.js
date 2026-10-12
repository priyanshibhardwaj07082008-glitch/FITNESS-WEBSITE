document.getElementById("contact").querySelector("form")
    .addEventListener("submit", function(event) {

        
        event.preventDefault();

       
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let plan = document.getElementById("plan").value;

        
        alert(
            "Registration Successful!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Membership: " + plan
        );

        
        this.reset();
    });
