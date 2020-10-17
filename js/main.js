$(document).ready(function () {
  $(".header").height($(window).height());

  $(".navbar a").click(function () {
    $("body,html").animate({
      scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)
  });


  ymaps.ready(init);


  function init() {
    var myMap = new ymaps.Map('map-field', {
      center: [59.902849, 30.261251],
      zoom: 15,
      behaviors: ["default", "scrollZoom"]
    }, {
      searchControlProvider: 'yandex#search'
    });

    var castlePoint = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [59.904240, 30.259484]
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: 'Фундамент дворца Екатерины I',
      }
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
    });

    var myArea = new ymaps.GeoObject({

      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [59.904813, 30.257295],
            [59.904444, 30.259274],
            [59.904391, 30.259761],

            [59.904083, 30.259537],
            [59.904207, 30.259075],
            [59.904585, 30.257105],
          ],
          []
        ]
      }, properties: {
        balloonContent: "Обустраиваемая территория"
      },
    }, {
      strokeColor: "#0000ff",
      strokeWidth: 1,
      strokeOpacity: 0.5
    }
    );

    myMap.geoObjects.add(myArea);
    myMap.geoObjects.add(castlePoint);
  }


})
