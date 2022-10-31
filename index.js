function ImageSwap(){
    if(document.getElementById("thumbnail1").src==true)
    {
        document.getElementById("mainproduct").src="image-product-1.jpg";
    }
    else if(document.getElementById("thumbnail2").src==true)
    {
        document.getElementById("mainproduct").src="image-product-2.jpg";
    }
    else if(document.getElementById("thumbnail3").src==true)
    {
        document.getElementById("mainproduct").src="image-product-3.jpg";
    }
    else if(document.getElementById("thumbnail4").src==true)
    {
        document.getElementById("mainproduct").src="image-product-4.jpg";
    }
}