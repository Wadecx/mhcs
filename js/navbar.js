function showSideBar() {
    const sidebar = document.querySelector(".nav_phone");
    const burgerMid = document.getElementById("top");
    // Sidebar
    if(sidebar.style.opacity == "0"){
        sidebar.style.visibility = "visible"
        sidebar.style.opacity = "1"
        sidebar.style.transform = "translateY(-20px)"
        sidebar.style.transition=" all .2s"
        // Burger btn
        burgerMid.style.transform = "translateX(-50px)"
    } else {
        // Sidebar
        sidebar.style.transform = "translateY(20px)"
        sidebar.style.opacity = "1"
        sidebar.style.opacity = "0";
        sidebar.style.visibility = "hidden";
        //Burger btn

        
    }
}


