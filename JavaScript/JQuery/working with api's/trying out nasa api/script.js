var nasaImage = (result) => {
  var img = $(document.createElement("img"));
  img.attr("src", result.url);
  img.appendTo("#nasa-image");
};

$.ajax({
  url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2010-06-05",
  method: "GET",
  success: nasaImage,
  //   data: {
  //     api_key: "DEMO_KEY",
  //     date: 2018 - 06 - 05,
  //   },
});
