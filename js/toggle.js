document.getElementById("feature_menu_toggle").addEventListener("click",()=> {
    //document.getElementById("company_menu").classList.add("d_none");
    document.getElementById("feature_menu").classList.toggle("d_none");
})
document.getElementById("company_menu_toggle").addEventListener("click",()=> {
    //document.getElementById("feature_menu").classList.add("d_none");
    document.getElementById("company_menu").classList.toggle("d_none");
})
document.getElementById("hamburger_icon").addEventListener("click",()=> {

    if(document.getElementById("hamburger_menu").classList.contains("d_none")) {
        //from display:none to display:block
        document.getElementById("hamburger_icon").src="images/icon-close-menu.svg";
    } else {
        document.getElementById("hamburger_icon").src="images/icon-menu.svg";
    }

    document.getElementById("nav1").classList.toggle("d_none");
    // document.getElementById("nav2").classList.toggle("d_none");
    document.getElementById("hamburger_menu").classList.toggle("d_none");
    document.getElementById("login_link").classList.toggle("d_none");
    document.getElementById("register_link").classList.toggle("d_none");
})