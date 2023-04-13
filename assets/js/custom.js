var downloadButton = document.querySelector(".button-download");

downloadButton.addEventListener("click", function () {
  var activeItem = document.querySelector(".owl-resume-item .owl-item.active");

  // Get the image element within the active carousel item
  var pdfElement = activeItem.querySelector("object"); // Assuming the PDF is embedded using <object> tag

  // Extract the PDF source URL
  var pdfURL = pdfElement.getAttribute("data");

  var downloadLink = document.createElement("a");
  downloadLink.href = pdfURL;
  downloadLink.download = "resume-template.pdf";
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

$(".owl-resume-item").owlCarousel({
  items: 1,
  loop: true,
  dots: true,
  // nav: true,
  autoplay: true,
  margin: 30,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
//FOR FAQ
$(document).ready(function () {
  $(".card-header").on("click", function () {
    $(this).find(".fas").toggleClass("fa-plus fa-minus");
    $(this).next(".collapse").collapse("toggle");
  });
});
