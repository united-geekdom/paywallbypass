if(document.title.includes("The Indian Express")) {
    document.getElementsByClassName("ie-premium-content-block")[0].style.display = "inline-block";
    document.getElementsByClassName("content-login-wrapper")[0].style.display = "none";
    document.getElementsByClassName("subscriber_hide")[0].style.display = "none"; 
} else {
    alert("Please use this on an Indian Express article.")
}