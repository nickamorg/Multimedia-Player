function expand_filter(this_elem) {
    $("#" + this_elem).find("em").toggleClass("fa-long-arrow-up fa-long-arrow-down");
}


$( document ).ready(function() {
    html = "";
    for(i = (new Date()).getFullYear(); i >= 1950; i--) {
        html += '<option value=\"' + i + '\">' + i + '</option>';
    }
    document.getElementById("from").innerHTML = html;
    document.getElementById("to").innerHTML = html;
})