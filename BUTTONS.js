
// CREATING THE FUNCTION FOR THE BUTTON
// THIS FUNCTION HELPS DETERMINE WHEN A BUTTON IS ACTIVE
// THIS IS NOT NECESSARY, I JUST WANTED TO MAKE SOMETHING IN JAVASCRIPT
function tabButton(event, name) {
    
    // CREATING THE VARIABLES NEEDED
    var i, tablinks;
    
    // TAKES THE ACTIVE TAB AND REPLACES THE active CLASS WITH ''
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    // THE SELECTED TAB TAKES ON THE active CLASS
    document.getElementById(name).style.display = "block";
    event.currentTarget.name += "active";
} 
// REFERENCED FROM W3 SCHOOLS