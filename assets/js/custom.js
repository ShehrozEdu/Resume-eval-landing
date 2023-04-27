var downloadButton = document.querySelector(".button-download");

downloadButton.addEventListener("click", function () {
  var activeItem = document.querySelector(".owl-resume-item .owl-item.active");

  var docElement = activeItem.querySelector("object"); // Assuming the Word document is embedded using <object> tag

  // Extract the document source URL
  var docURL = docElement.getAttribute("data");
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  var downloadLink = document.createElement("a");
  downloadLink.href = docURL;
  downloadLink.download = `"resume-template-${randomNumber}.doc"`;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

$(".owl-resume-item").owlCarousel({
  items: 1,
  loop: true,
  dots: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  autoplayTimeout: 6000,
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
