const faqContainer = document.querySelector('.faq-container');
const accordianWrapper = document.querySelectorAll('.accordian-wrapper');

for (let i = 0; i < accordianWrapper.length; i++) {
    accordianWrapper[i].setAttribute('onclick', 'expand(this)');
}

function expand(element) {
    const wrapper = element;
    const answerDiv = element.children[1];
    const questionDiv = element.children[0];

    if (wrapper.classList.contains('active')) {
        wrapper.classList.toggle('active');
        questionDiv.children[1].classList.remove('fa-caret-up');
        questionDiv.children[1].classList.add('fa-caret-down');
        setTimeout(() => {
            answerDiv.classList.toggle('hide');
        }, 100);
    }
    else {
        answerDiv.classList.toggle('hide');
        questionDiv.children[1].classList.remove('fa-caret-down');
        questionDiv.children[1].classList.add('fa-caret-up');
        setTimeout(() => {
            wrapper.classList.toggle('active');
        }, 100);
        
        for (let i = 0; i < wrapper.parentElement.children.length; i++) {
            if (i !== Array.from(wrapper.parentElement.children).indexOf(wrapper)) {
                wrapper.parentElement.children[i].classList.remove('active');
                wrapper.parentElement.children[i].children[0].children[1].classList.add('fa-caret-down');
                wrapper.parentElement.children[i].children[0].children[1].classList.remove('fa-caret-up');
                setTimeout(() => {
                    wrapper.parentElement.children[i].children[1].classList.add('hide');
                }, 100);
            }
        }
    }
}