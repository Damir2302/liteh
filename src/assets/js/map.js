$(document).ready(function() {

    const points = [
        {
            name: 'Офис «Маяковская»',
            coordinates: [55.772887, 37.596040]
        },

        {
            name: 'Офис «Фрунзенская»',
            coordinates: [55.731288, 37.576160]
        },

        {
            name: 'Офис «Багратионовская»',
            coordinates: [55.740031, 37.496174]
        },

        {
            name: 'Офис «Мичуринский проспект»',
            coordinates: [55.685548, 37.489571]
        },

        {
            name: 'Офис «Электрозаводская»',
            coordinates: [55.783544, 37.711590]
        },

        {
            name: 'Офис «Перово»',
            coordinates: [55.746613, 37.766315]
        },

        {
            name: 'Офис «Первомайская»',
            coordinates: [55.792842, 37.796184]
        },

        {
            name: 'Офис «Коньково»',
            coordinates: [55.631417, 37.524300]
        },

        {
            name: 'Офис «Беломорская»',
            coordinates: [55.866041, 37.495078]
        },

        {
            name: 'Офис «Сходненская»',
            coordinates: [55.848195, 37.421731]
        },

        {
            name: 'Офис «Коммунарка»',
            coordinates: [55.543180, 37.481460]
        },
    ]

    let pointSize;
    let clusterSize;

    if ($(window).width() < 744) {
        pointSize = [40, 40];
        clusterSize = [32, 32];
    } else {
        pointSize = [60, 60];
        clusterSize = [52, 52];
    }

    if ($("#map").length) {

        function addYaMaps() {
            var myMap;
            ymaps.ready(init);

            function init() {
                myMap = new ymaps.Map('map', {
                    center: [55.738294, 37.627584],
                    zoom: 10,
                    controls: []
                }),
                
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass( '<div class="cluster">$[properties.geoObjects.length]</div>')

                clusterer = new ymaps.Clusterer({
                    clusterIcons: [
                        {
                            href: 'assets/images/ellipse-cluster.svg',
                            size: clusterSize,
                            offset: [-20, -20]
                        }
                    ],
                    clusterIconContentLayout: MyIconContentLayout
                })

                clusterer.options.set({
                    gridSize: 100,
                    clusterDisableClickZoom: false
                });

                for (let point in points) {
                    placemarks = new ymaps.Placemark(points[point].coordinates , {
                        balloonContentBody: `<address>Офис «Узловая»
                                                <br>Телефон: +7 (48731) 5-21-01
                                                <br>Телефон: +7 (950) 926-03-03
                                                <br>Email: uzlovaya@analyz24.ru
                                                <br>Адрес: Тульская область, г. Узловая, ул. Трегубова, д. 34
                                            </address>`,
                    }, {
                            iconLayout: 'default#image',
                            iconImageHref: 'assets/images/map-pin.svg',
                            iconImageSize: pointSize,
                            iconImageOffset: [-37, -45],
                            balloonOffset: [-25, -5]
                        });
                    
                    clusterer.add(placemarks)
                    myMap.geoObjects.add(clusterer);
                }

                ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
            }
        }

        addYaMaps();
    }

})

