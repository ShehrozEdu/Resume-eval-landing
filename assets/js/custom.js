$(".button-download").click(function () {
  var activeItem = $(".owl-resume-item .owl-item.active");
  var docElement = activeItem.find("object");
  var docURL = docElement.attr("data");
  var randomNum = Math.floor(Math.random() * 10000);
  var fileName = "resume-template-" + randomNum + ".doc";
  var downloadLink = $("<a></a>");
  downloadLink.attr("href", docURL);
  downloadLink.attr("download", fileName);
  downloadLink.css("display", "none");
  $("body").append(downloadLink);

  downloadLink[0].click();

  downloadLink.remove();
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
