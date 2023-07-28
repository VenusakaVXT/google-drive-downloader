function getIdFromGoogleDrive(url) {
    let id = "";

    // Contains parts of the URL that have been parsed
    let parts = url.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);

    // If the URL contains a direct id, it contains `?id=`
    if (url.indexOf('?id=') >= 0) {

        // The function will get the ID from the 6th element of `parts` after URL parsing
        id = (parts[6].split("=")[1]).replace("&usp","");
        return id;

    } else {

        // Otherwise if the URL does not contain the string `?id=`
        // The function will get the ID from the 5th element of `parts` after URL parsing
        id = parts[5].split("/");
        //Using sort to get the id as it is the longest element
        let sortArr = id.sort(function(a,b){return b.length - a.length});
        id = sortArr[0];
        return id;

    }
}

// Listen to the event when click on the link
document.addEventListener('click', function(event) {
    let target = event.target;

    // Execute when receiving the url of gg drive
    if (target.tagName === 'A' && target.href.includes('drive.google.com')) {

        event.preventDefault(); // Prevent default browser behavior when clicking on links
        let fileId = getIdFromGoogleDrive(target.href);
        let downloadUrl = 'https://drive.google.com/uc?export=download&id=' + fileId;
        window.location.href = downloadUrl; // Automatically download files

    }
});