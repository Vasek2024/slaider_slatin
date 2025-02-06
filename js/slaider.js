const slidesDots = document.getElementsByClassName('result__img'),
    btnNext = document.querySelector('.description__revers-back'),
    btnPrev = document.querySelector('.description__revers-forward'),
    wrappetDots = document.querySelector('.description__revers-pagination'),
    dots = document.getElementsByClassName('description__revers-btn'),
    wrappelincs = document.querySelector('.result__nav'),
    navLincs = document.getElementsByClassName('result__list')

// sampleSiti = document.querySelector('.description__sample-siti'),
// sampleTime = document.querySelector('.description__sample-time'),
// sampleApartment = document.querySelector('description__sample-apartment'),
// sampleCost = document.querySelector('description__sample-cost')
// console.log(sampleSiti.append(`<p>`))
// sampleSiti.createElement('button')
let slideIndex = 1

// Вызов функции
showSlides(slideIndex)

function showSlides(index) {
    if (index > slidesDots.length) {// если index больне длинны массива слайдов, то
        slideIndex = 1
    }
    if (index < 1) {// если index меньше одного, то
        slideIndex = slidesDots.length// равно длинне массива
    }
    for (let i = 0; i < slidesDots.length; i++) {// проходим массивом по слайдам
        slidesDots[i].style.display = 'none'// задаём стиль (прячем все слайды)
    }
    for (let i = 0; i < dots.length; i++) {// проходим массивом по точкам
        dots[i].classList.remove('active')// удаляем класс активности у кнопак
    }
    for (let i = 0; i < navLincs.length; i++) {// проходим массивом по ссылкам
        navLincs[i].classList.remove('result__list-active')// удаляем класс активности у ссылок
    }

    // Находим теги Р
    const sampleSiti = document.querySelector('.description__sample-siti p'),
        sampleApartment = document.querySelector('.description__sample-apartment p'),
        sampleTime = document.querySelector('.description__sample-time p'),
        sampleCost = document.querySelector('.description__sample-cost p')

    switch (slideIndex) {// По индексу слайда меняем значения в теги Р
        case 1:
            sampleSiti.innerHTML = `Rostov-on-Don <br> LCD admiral`
            sampleApartment.innerHTML = `81 m2`
            sampleTime.innerHTML = `3.5 months`
            sampleCost.innerHTML = `Upon request`
            break;
        case 2:
            sampleSiti.innerHTML = `Sochi <br> Thieves`
            sampleApartment.innerHTML = `105 m2`
            sampleTime.innerHTML = `4 months`
            sampleCost.innerHTML = `Upon request`
            break;
        case 3:
            sampleSiti.innerHTML = `Rostov-on-Don <br> Patriotic`
            sampleApartment.innerHTML = `93 m2`
            sampleTime.innerHTML = `3 months`
            sampleCost.innerHTML = `Upon request`
            break;
    }

    slidesDots[slideIndex - 1].style.display = 'block'// задаём стиль слайду (показываем)
    dots[slideIndex - 1].classList.add('active')// задаём класс активности у кнопаки
    navLincs[slideIndex - 1].classList.add('result__list-active')// задаём класс активности у ссылоки
}

function pluseSlaide(index) {// прибавить слайд
    showSlides(slideIndex += index)
}

function currentSlaide(index) {// индекс текущего слайда
    showSlides(slideIndex = index);
}

btnPrev.addEventListener('click', function () {// событие клика по стрелки назад
    pluseSlaide(-1)// отнимаем слайд
})
btnNext.addEventListener('click', function () {// событие клика по стрелки вперёд
    pluseSlaide(1)// прибавляем слайд
})

wrappetDots.addEventListener('click', function (event) {// событие клика по блоку с точками
    for (let i = 0; i < dots.length + 1; i++) {// проходим по нему массивом
        // если кликнули именно по точке и 
        if (event.target.classList.contains('description__revers-btn') && event.target == dots[i - 1]) {
            currentSlaide(i)// индекс текущего слайда
        }
    }
})

wrappelincs.addEventListener('click', function (event) {// событие клика по блоку со ссылками
    for (let i = 0; i < navLincs.length + 1; i++) {// проходим по нему массивом
        // если кликнули именно по ссылке и 
        if (event.target.classList.contains('result__list') && event.target == navLincs[i - 1]) {
            currentSlaide(i)// индекс текущего слайда
        }
    }
})