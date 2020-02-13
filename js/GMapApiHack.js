var map;
function initMap() {
  const loc = { lat: 23.044371, lng: 72.517921 };
  map = new google.maps.Map(document.getElementsByClassName("map")[0], {
    center: loc,
    zoom: 14
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
  newMapLayout();
}

function newMapLayout() {
  var mapimg = document.getElementsByClassName("map")[0];

  var intrvl = setInterval(() => {
    var gglmsg = mapimg.querySelector(
      `[src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"]`
    );
    var imgs = mapimg.querySelectorAll("img[draggable][role]");
    if (gglmsg != null) {
      gglmsg.parentNode.parentNode.remove();
    }
    imgs.forEach(e => {
      var src1 = e.src;
      src2 = src1.replace("2m3!1e2!6m1!3e5!3m17", "3m12");
      e.src = src2;
    });
  }, 0);
}
