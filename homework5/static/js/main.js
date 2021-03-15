
// product filtering based on categories. 
var filtering = function () {
  var $filterCheckboxes = $('input[type="checkbox"]');

  var filterFunc = function() {
    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {

      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }

      selectedFilters[this.name].push(this.value);
    });

    // create a collection containing all of the filterable elements
    var $filteredResults = $('.product-grid__product-wrapper');

    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {

      // filter each .flower element
      $filteredResults = $filteredResults.filter(function() {

        var matched = false,
          currentFilterValues = $(this).data('category').split(' ');

        // loop over each category value in the current .flower's data-category
        $.each(currentFilterValues, function(_, currentFilterValue) {

          // if the current category exists in the selected filters array
          // set matched to true, and stop looping. as we're ORing in each
          // set of filters, we only need to match once

          if ($.inArray(currentFilterValue, filterValues) != -1) {
            matched = true;
            return false;
          }
        });

        // if matched is true the current .flower element is returned
        return matched;

      });
    });

    $('.product-grid__product-wrapper').hide().filter($filteredResults).show();
  }

  $filterCheckboxes.change(filterFunc());
}



// Banner images slide show
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slideIndex = n;
  var slides = document.getElementsByClassName("banner-img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// display the text after the user has subscribed
function display_sub() {
  const newp = document.createElement("p");
  newp.style.color = "#193b19";
  newp.style.fontFamily = 'Raleway';
  const success = document.createTextNode("You have successfully subscribed.");
  newp.appendChild(success);

  var subscript = document.getElementById("subscript");
  subscript.appendChild(newp);
}


// hide the "email address" value in the input box
function hidevalue() {
  var input = document.getElementById("input-box");
  if (input.value == 'email address') {
    input.value='';
  }
}