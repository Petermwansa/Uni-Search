$(document).ready(function(){

    //to display the inquiries modal when clicked
    $("#signupButton").click(function(){
        $("#signupModal").modal('show');
    });
    
    //this will close the modal when clicked
    $("#cancelButton").click(function(){
        $("#signupModal").modal('hide');
    });

    //to cancel the login modal when the x is clicked
    $("#crossModal").click(function(){
        
        $("#signupModal").modal('hide');
    
    });
});