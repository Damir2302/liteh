$(document).ready(function() {

    const points = [
        {
            name: 'Офис «Маяковская»',
            station: 'Маяковская',
            coordinates: [55.772887, 37.596040],
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Фрунзенская»',
            station: 'Фрунзенская',
            coordinates: [55.731288, 37.576160],
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Багратионовская»',
            station: 'Багратионовская',
            coordinates: [55.740031, 37.496174],
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Мичуринский проспект»',
            station: 'Мичуринский проспект',
            coordinates: [55.685548, 37.489571],
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Электрозаводская»',
            station: 'Электрозаводская',
            coordinates: [55.783544, 37.711590],
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Перово»',
            coordinates: [55.746613, 37.766315],
            station: 'Перово',
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Первомайская»',
            coordinates: [55.792842, 37.796184],
            station: 'Первомайская',
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Коньково»',
            coordinates: [55.631417, 37.524300],
            station: 'Коньково',
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Беломорская»',
            coordinates: [55.866041, 37.495078],
            station: 'Беломорская',
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Сходненская»',
            coordinates: [55.848195, 37.421731],
            station: 'Сходненская',
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
        },

        {
            name: 'Офис «Коммунарка»',
            coordinates: [55.543180, 37.481460],
            station: 'Коммунарка',
            address: 'г. Москва, ул. Малая Пироговская, дом 1А',
            phone: '+7 (499) 245-92-00',
            phone_2: '+7 (967) 119-73-44',
            email: 'operator.frunzenskaya@analyz24.ru',
            work_time: 'ПН-ПТ: 8:00 - 19:00',
            work_time_2: 'СБ: 10:00 - 16:00',
            dayoff: 'ВС: выходной',
            note: '<span>!</span> Сокращённый график работы<br>8:00 -14:00',
            link: 'contacts-inner.html'
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
                        balloonContentBody: `<div class="contacts-map">
                                                <div class="contacts__block-title">${points[point].name}</div>
                                                <div class="contacts__block-metro">${points[point].station}</div>
                                                <div class="contacts__block-address">${points[point].address}</div>
                                                <div class="contacts__block-phone">${points[point].phone}</div>
                                                <div class="contacts__block-phone">${points[point].phone_2}</div>
                                                <div class="contacts__block-mail">${points[point].email}</div>
                                                <div class="contacts__block-worktime">${points[point].work_time}</div>
                                                <div class="contacts__block-worktime">${points[point].work_time_2}</div>
                                                <div class="contacts__block-dayoff">${points[point].dayoff}</div>
                                                <div class="contacts__block-note">${points[point].note}</div>
                                                <div class="contacts__block-btn button-style"><a href="${points[point].link}">Подробнее</a></div>
                                            </div>`,
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

    if ($("#office_map").length) {

        function addOfficeMap() {
            var officeMap;
            ymaps.ready(init);

            function init() {
                officeMap = new ymaps.Map('office_map', {
                    center: [55.738294, 37.627584],
                    zoom: 10,
                    controls: []
                }),

                placemark = new ymaps.Placemark([55.738294, 37.627584], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: 'assets/images/map-pin-orange.svg',
                    iconImageSize: pointSize,
                    iconImageOffset: [-37, -45],
                    balloonOffset: [-25, -5]
                });
                
                officeMap.geoObjects.add(placemark);

                ymapsTouchScroll(officeMap, {preventScroll: true, preventTouch: true});
            }
        }

        addOfficeMap();
    }

})

