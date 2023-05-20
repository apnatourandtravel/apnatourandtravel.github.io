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
        setTimeout(() => {
            answerDiv.classList.toggle('hide');
        }, 100);
    }
    else {
        answerDiv.classList.toggle('hide');
        setTimeout(() => {
            wrapper.classList.toggle('active');
        }, 100);
    }

    for (let i = 0; i < wrapper.parentElement.children.length; i++) {
        if (i !== Array.from(wrapper.parentElement.children).indexOf(wrapper)) {
            wrapper.parentElement.children[i].classList.remove('active');
            setTimeout(() => {
                wrapper.parentElement.children[i].children[1].classList.add('hide');
            }, 100);
        }
    }
}