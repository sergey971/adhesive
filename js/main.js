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

    // клик снаружи
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
const colDescs = document.querySelectorAll(".questions__col__desc");
const colBtns = document.querySelectorAll(".questions__col__btn");

function closeColDesc() {
    colDescs.forEach((colDesc)=>{
        colDesc.classList.add("none");
    })
}

closeColDesc(); 

colBtns.forEach(function (item, index) {
    item.addEventListener("click", function(){
        colDescs.forEach((element)=>{
            element.classList.add("none");
        })
        colDescs[index].classList.toggle('none');
    
        item.classList.toggle('rorateBtn');
    })
})


$(function() {
	$('.video__popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

