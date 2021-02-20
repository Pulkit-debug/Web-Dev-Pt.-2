var getMeADog = () => {
  var xhrRequest = new XMLHttpRequest(); // making an object for request
  // initializing the request
  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  // here true is for synchronus javascript because we want to first fetch the dog image and then do something later on.
  xhrRequest.send();
  // sending our request

  // after sending now I want to handle the response that is coming from server.
  // onload function will take care of the response

  xhrRequest.onload = function () {
    console.log(xhrRequest.response);
    // here the response that I'm getting is in String Format
    // not I need to convert that into JSon Object so that I can
    // use it's properties whatever are there.
    var jsonResposne = JSON.parse(xhrRequest.response);
    var imgUrl = jsonResposne.message;
    $("#dog-image").attr("src", imgUrl);
    // now need to add this to the image tag in html
  };
};

var getMeADogWithAjax = () => {
  var breed = $("#dog-breed").val();
  console.log(breed);

  $.ajax({
    url: "https://dog.ceo/api/breed/" + breed + "/images/random",
    method: "GET",
    success: function (data) {
      var imageUrl = data.message;
      $("#dog-image").attr("src", imageUrl);
      console.log("after fetch");
    },
  }).fail(function () {
    console.log("oops");
  });

  //   $.get("https://dog.ceo/api/breeds/image/random", function (data) {
  //     var imageUrl = data.message;
  //     $("#dog-image").attr("src", imageUrl);
  //   });
};

$("#btn").on("click", getMeADogWithAjax);
