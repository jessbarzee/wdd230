function displayLastModified() {
    // //declare variables and get date information
    // const d = new Date();
    // const year = d.getFullYear();

    // using getElementById
    document.getElementById('lastupdated').textContent = `Last Modification: ${document.lastModified}`;
}

document.addEventListener('DOMContentLoaded', displayLastModified);
