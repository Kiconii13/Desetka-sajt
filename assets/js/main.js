$(document).ready(function(){
    //automatic slider - quotes
    function slider(){
        let trenutni = $("#quotes-block .active-quote");
        let sledeci = ($(trenutni).next().length) ? $(trenutni).next() : $(trenutni).parent().children(":first");

        $(trenutni).removeClass("active-quote");
        $(sledeci).addClass("active-quote");

        setTimeout(slider,5000);
    }

    slider();

    // Obrada forme
    $('#btnSacuvaj').click(function(){
        let brojGresaka=0;
        let poljeIme=$("#tbIme");
        let poljePrezime=$("#tbPrezime");

        let poljeEmail=$("#tbEmail");
        
        function obradaPolja(element, poruka){
            if($(element).val()==""){
                brojGresaka++;
                $(element).next().html(poruka);
                $(element).addClass("error");
            }
            else{
                $(element).next().html("");
                $(element).removeClass("error");
            }
        }
        obradaPolja($(poljeIme),"Unesite ime!");
        obradaPolja($(poljePrezime),"Unesite prezime!");
        obradaPolja($(poljeEmail),"Unesite Email!");


        if(brojGresaka==0){
            $("#message").html("Uspešno ste popunili formu.");
            $("#message").addClass("ok");
            $("#contact-form").trigger("reset");
        }
    })

    // Prikaz bloka scrollToTop

    $(window).scroll(function(){
        let skrolovano=$(this).scrollTop();

        if(skrolovano>300){
            $("#scrollToTop").fadeIn();
        }
        else{
            $("#scrollToTop").fadeOut();
        }
    })

    // Klik na blok scrollToTop

    $('#scrollToTop').click(function(){
        $('html').animate({scrollTop: 0}, 2000);
    });

    // Navigacija
    $(".nav-link").on("click", function(e){
        e.preventDefault();

        let dataDiv=$(this).data("div");
        $("html, body").animate({
            scrollTop:$(dataDiv).offset().top},2000);
        })
    })



/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr1(id , speed) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec1(0, endNbr, elt, speed);
}

/*A recursive function to increase the number.*/
function incNbrRec1(i, endNbr, elt, speed) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec1(i + 1, endNbr, elt, speed);
    }, speed);
  }
}

function incEltNbr2(id , speed) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec2(0, endNbr, elt, speed);
  }
  
  /*A recursive function to increase the number.*/
  function incNbrRec2(i, endNbr, elt, speed) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function() {//Delay a bit before calling the function again.
        incNbrRec2(i + 10, endNbr, elt, speed);
      }, speed);
    }
  }

incEltNbr1("nbr1", 28); /*Call this funtion with the ID-name for that element to increase the number within*/
incEltNbr2("nbr2", 0.5);
incEltNbr2("nbr3", 30);

