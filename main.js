const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//--container__body-new-opition btn

const btn_opition = $$('.container__body-new-opition-btn');
btn_opition.forEach((btn) => {
    btn.onclick = function() {
        $('.container__body-new-opition-btn.active').classList.remove('active');
        this.classList.add('active');
    }
});

//navbar__body-item focus
const items = $$('.navbar__body-item');
items.forEach((item) => {
    item.onclick = function() {
        $('.navbar__body-item.active').classList.remove('active');
        this.classList.add('active');
    }
})