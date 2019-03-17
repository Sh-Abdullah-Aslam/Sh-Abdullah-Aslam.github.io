/* ------------------------------------------------------------
		To make the navbar responsive to screen resizing
 ------------------------------------------------------------ */




/* ------------------------------------------------------------
			functions for both student and faculty
 ------------------------------------------------------------ */

//function to logout (redirect) if the user confirms
function confirm_logout()
{
	if(confirm("Are you sure you want to logout?") == true)
		window.location = "index.html";
}


/* ------------------------------------------------------------
						Students functions
 ------------------------------------------------------------ */


/* ------------------------------------------------------------
						Faculty functions
 ------------------------------------------------------------ */

// Logout Faculty Function
function Confirm_Faculty_Logout()
{
    if(confirm("All unsaved work will be lost.\nDo you still want to logout?") == true)
        window.href = "index.html";
}

// save course details
function SaveDetails()
{
    if(confirm("Do you want to save these details ? ") == true)
        window.href = "faculty_view.html";
}

