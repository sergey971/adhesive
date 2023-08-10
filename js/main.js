// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');

    const dropDownListItems = dropDownWrapper.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input__hidden');

    // document.querySelector('.dropdown__list').classList.add('none');
    dropDownBtn.addEventListener("click", function () {
        dropDownList.classList.toggle('active');
        this.classList.add("dropdown__button--active")
    })

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove("active");
        })
    });


    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove("dropdown__button--active")
            dropDownList.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove("dropdown__button--active")
            document.querySelector('.dropdown__list').classList.remove('active');
        }
    })
});
// const colDescs = document.querySelectorAll(".questions__col__desc");
// ===================================================================
const colBtns = document.querySelectorAll(".questions__col__btn");
const colText = document.querySelectorAll(".questions__col__desc__text");

function showText() {
    colBtns.forEach(function (item, index) {
        item.addEventListener('click', function () {
            colText[index].classList.toggle('margin')
            if (colText[index].classList.contains('margin')) {
                colText[index].style.marginTop = '-336px';
                colText[index].style.transition = 'margin-top, .6s ease';
            }
            item.classList.toggle('rorate');
        });
    })
}
showText()
// function closeColDesc() {
//     colDescs.forEach((colDesc) => {
//         colDesc.classList.add("none");
//     })
// }

// closeColDesc();

// colBtns.forEach(function (item, index) {
//     item.addEventListener("click", function () {
//         colDescs.forEach((element) => {
//             element.classList.add("none");
//         })
//         colDescs[index].classList.toggle('none');

//         item.classList.toggle('rorateBtn');
//     })
// })

// =================================================================
$(function () {
    $('.video__popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

// ===================================================================

const addForm = document.querySelector('#add-form');
const errorMessage = document.querySelectorAll('.error-message');
const nameClient = document.querySelector('#nameClient');
const surveys = document.querySelectorAll('.shape__survey');
const quests = document.querySelectorAll('.shape__quest');


    function toggleSurvey() {
        surveys.forEach(function (survey) {
            survey.classList.add('none')
        })
        quests.forEach((quest, index) => {
            quest.addEventListener('mouseover', function () {
                surveys[index].classList.remove('none');
            });

            quest.addEventListener('mouseout', function () {
                surveys[index].classList.add('none');
            });
        });
    }

toggleSurvey();


function validation(addForm) {

    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.classList.remove('error')
        }
        const error = parent.querySelector('.error__message');
        if (error) {
            error.classList.remove('active');
        }
    }
    function createError(input) {
        const parent = input.parentNode;
        parent.classList.add('error');
        const error = parent.querySelector('.error__message');
        if (error) {
            error.classList.add('active');
        }
    }


    let result = true;

    const allInputs = addForm.querySelectorAll('.input-field');
    for (const input of allInputs) {


        removeError(input);

        if (input.value == '') {
            createError(input);
            result = false;
        }
    }


    return result
}
// function closeQuest(){
//     quests.forEach(function(quest){
//         quest.classList.add('none');
//         quest.classList.remove('active');
//     })
// }
// function openQuest(){
//     quests.forEach(function(quest){
//         quest.classList.remove('none');
//         quest.classList.add('active');
//     })
// }

addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validation(this) == true) {
        alert("Форма проверена успешна");
        this.reset();
    }

})
