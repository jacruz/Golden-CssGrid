var ind=true;
function openMenu(){
    let nav = document.getElementById("nav");
    let element = document.getElementById("mobile-menu-open");
    let icoMenuOpen = document.getElementById("ico-menu");
    if(ind){
        element.style.display="block";
        ind=false;
        nav.style.height="100%";
        icoMenuOpen.classList.remove("fa-bars");
        icoMenuOpen.classList.add("fa-arrow-left");
    }else{
        nav.style.height="auto";
        element.style.display="none";
        ind=true;
        icoMenuOpen.classList.add("fa-bars");
        icoMenuOpen.classList.remove("fa-arrow-left");
    }
    
}