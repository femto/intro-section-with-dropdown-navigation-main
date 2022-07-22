document.getElementById("feature_menu_toggle").addEventListener("click",()=> {
    document.getElementById("company_menu").classList.add("d_none");
    document.getElementById("feature_menu").classList.toggle("d_none");
})
document.getElementById("company_menu_toggle").addEventListener("click",()=> {
    document.getElementById("feature_menu").classList.add("d_none");
    document.getElementById("company_menu").classList.toggle("d_none");
})