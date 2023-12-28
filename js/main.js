const btn_couleur1 = document.querySelector('.couleur1');
const btn_couleur2 = document.querySelector('.couleur2');
const btn_couleur3 = document.querySelector('.couleur3');
const btn_couleur4 = document.querySelector('.couleur4');
const btn_couleur5 = document.querySelector('.couleur5');
const btn_couleur6 = document.querySelector('.couleur6');
const btn_couleur7 = document.querySelector('.couleur7');
const btn_couleur8 = document.querySelector('.couleur8');

const color1 = document.querySelectorAll('.color1');
const color2 = document.querySelectorAll('.color2');
const color2_span = document.querySelectorAll('.color2_span');
const color2_texte = document.querySelectorAll('.color2_texte');
const color3 = document.querySelectorAll('.color3');
const color4 = document.querySelectorAll('.color4');
const color5 = document.querySelectorAll('.color5');

btn_couleur1.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active1')
    })
    color2.forEach(function(element) {
        element.classList.add('active1')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active1')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active1')
    })
    color3.forEach(function(element) {
        element.classList.add('active1')
    })
    color4.forEach(function(element) {
        element.classList.add('active1')
    })
})

btn_couleur2.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active2')
    })
    color2.forEach(function(element) {
        element.classList.add('active2')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active2')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active2')
    })
    color3.forEach(function(element) {
        element.classList.add('active2')
    })
    color4.forEach(function(element) {
        element.classList.add('active2')
    })
})

btn_couleur3.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active3')
    })
    color2.forEach(function(element) {
        element.classList.add('active3')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active3')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active3')
    })
    color3.forEach(function(element) {
        element.classList.add('active3')
    })
    color4.forEach(function(element) {
        element.classList.add('active3')
    })
})

btn_couleur4.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active4')
    })
    color2.forEach(function(element) {
        element.classList.add('active4')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active4')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active4')
    })
    color3.forEach(function(element) {
        element.classList.add('active4')
    })
    color4.forEach(function(element) {
        element.classList.add('active4')
    })
})

btn_couleur5.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active5')
    })
    color2.forEach(function(element) {
        element.classList.add('active5')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active5')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active5')
    })
    color3.forEach(function(element) {
        element.classList.add('active5')
    })
    color4.forEach(function(element) {
        element.classList.add('active5')
    })
})


btn_couleur6.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active6')
    })
    color2.forEach(function(element) {
        element.classList.add('active6')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active6')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active6')
    })
    color3.forEach(function(element) {
        element.classList.add('active6')
    })
    color4.forEach(function(element) {
        element.classList.add('active6')
    })
})

btn_couleur7.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active7')
    })
    color2.forEach(function(element) {
        element.classList.add('active7')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active7')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active7')
    })
    color3.forEach(function(element) {
        element.classList.add('active7')
    })
    color4.forEach(function(element) {
        element.classList.add('active7')
    })
})


btn_couleur8.addEventListener('click', function() {

    resetClasses();
    color1.forEach(function(element) {
        element.classList.add('active8')
    })
    color2.forEach(function(element) {
        element.classList.add('active8')
    })
    color2_span.forEach(function(element) {
        element.classList.add('active8')
    })
    color2_texte.forEach(function(element) {
        element.classList.add('active8')
    })
    color3.forEach(function(element) {
        element.classList.add('active8')
    })
    color4.forEach(function(element) {
        element.classList.add('active8')
    })
})

function resetClasses() {
    [1,2,3,4,5,6,7,8].forEach(function (x) {
        color1.forEach(function (element) {
        element.classList.remove('active' + x);
    });
        color2.forEach(function (element) {
        element.classList.remove('active' + x);
    });
        color2_span.forEach(function (element) {
        element.classList.remove('active' + x);
    });
        color3.forEach(function (element) {
        element.classList.remove('active' + x);
    });
        color4.forEach(function (element) {
        element.classList.remove('active' + x);
    });
});
}
