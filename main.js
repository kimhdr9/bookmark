function CreateBookMark(e){
    var name = document.getElementById("Name").value;
    var url = document.getElementById("URL").value;
    var helpurl=document.getElementById("HelpURL");

    alert(url);

    var bookmark = {
        name : name,
        url : url
    }
// local storage test
//  localStorage.setItem('test','Hello');
//     console.log(localStorage.getItem('test'));
// localStorage.removeItem('test')


// prevent from form submitting
    e.preventDefault();
    // dans le cas il n'existe pas de 'bookmark'
    if ( localStorage.getItem('bookmark')=== null){
        // crée un tableau
        var bookmarks =[];
        // ayant comme élement bookmùark
        bookmarks.push(bookmark);
        // crée un localstorage libellé bookmark avec les données bookmarks au format tableau.
        localStorage.setItem('bookmark',JSON.stringify(bookmarks));

    }else{
        // Get bookmark
        var bookmarks=JSON.parse(localStorage.getItem('bookmark'));
        // ayant comme élement bookmùark
        bookmarks.push(bookmark);
        // crée un localstorage libellé bookmark avec les données bookmarks au format tableau.
        localStorage.setItem('bookmark',JSON.stringify(bookmarks));
    }

}
// avec cette méthode le script doit être à la fin afin que l'id soit connu par le document au moment de l'appel
document.getElementById('monFormulaire').addEventListener("submit",CreateBookMark);


