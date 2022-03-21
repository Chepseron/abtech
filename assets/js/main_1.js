function morebulkSmsRowFunction() {
    var dots = document.getElementById("dotsBulk");
    var moreText = document.getElementById("bulkSmsRow");
    var btnText = document.getElementById("bulkSMSBtn");
    //the other text area displays 

    var moreTextipnRow = document.getElementById("ipnRow");
    var moreTextdomainRow = document.getElementById("domainRow");
    var moreTextgmbRow = document.getElementById("gmbRow");



    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";


        moreTextipnRow.style.display = "none";
        moreTextdomainRow.style.display = "none";
        moreTextgmbRow.style.display = "none";

    }
}




function moreipnRowFunction() {
    var dots = document.getElementById("dotsIpn");
    var moreText = document.getElementById("ipnRow");
    var btnText = document.getElementById("ipnBtn");


    var moreTextipnRow = document.getElementById("bulkSmsRow");
    var moreTextdomainRow = document.getElementById("domainRow");
    var moreTextgmbRow = document.getElementById("gmbRow");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";

        moreTextipnRow.style.display = "none";
        moreTextdomainRow.style.display = "none";
        moreTextgmbRow.style.display = "none";

    }
}



function moredomainRowFunction() {
    var dots = document.getElementById("dotsDomain");
    var moreText = document.getElementById("domainRow");
    var btnText = document.getElementById("domainBtn");


    var moreTextipnRow = document.getElementById("ipnRow");
    var moreTextdomainRow = document.getElementById("bulkSmsRow");
    var moreTextgmbRow = document.getElementById("gmbRow");


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";


        moreTextipnRow.style.display = "none";
        moreTextdomainRow.style.display = "none";
        moreTextgmbRow.style.display = "none";

    }
}



function moregmbRowFunction() {
    var dots = document.getElementById("dotsGbm");
    var moreText = document.getElementById("gmbRow");
    var btnText = document.getElementById("gmbBtn");


    var moreTextipnRow = document.getElementById("ipnRow");
    var moreTextdomainRow = document.getElementById("domainRow");
    var moreTextgmbRow = document.getElementById("bulkSmsRow");


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";


        moreTextipnRow.style.display = "none";
        moreTextdomainRow.style.display = "none";
        moreTextgmbRow.style.display = "none";

    }
}



