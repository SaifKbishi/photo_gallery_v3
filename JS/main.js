

/*fillter*/
function filterImages() {
    var input, filter, imageslinks, li, a, i;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    li = document.getElementById("imagesSection").getElementsByClassName("largeimages");
    for (i = 0; i < li.length; i++) {
        a = $("#imagesSection .largeimages").eq(i).data('title');
		if(a.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        } else {
          li[i].style.display = "none";

        }
    }
}
