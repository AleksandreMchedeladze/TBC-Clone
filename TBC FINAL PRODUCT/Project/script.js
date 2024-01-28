async function showSecond(target) {
  let second = document.getElementById('second');
  await fadeOut(target);
  await fadeIn(second);
}
async function showThird(target) {
  let first = document.getElementById('third');
  await fadeOut(target);
  await fadeIn(third);
}

async function showFirst(target) {
  let first = document.getElementById('first');
  await fadeOut(target);
  await fadeIn(first);
}

const func_arr = [showFirst, showSecond, showThird];
const name_arr = ['first', 'second', 'third']

let currentIndex = 0;

async function showNext() {
    if(currentIndex >= func_arr.length) {
        currentIndex = 0; 
    }

    console.log(currentIndex);
    switch(currentIndex){
        case 0: showSecond(document.getElementById('first')); break;
        case 1: showThird(document.getElementById('second')); break;
        case 2: showFirst(document.getElementById('third')); break;
    }

    currentIndex++;
}

async function showPrev() {
    if(currentIndex < 0 || currentIndex == 3) {
        currentIndex = 0;
    }

    console.log(currentIndex);
    switch(currentIndex){
        case 0: showThird(document.getElementById('first')); break;
        case 1: showFirst(document.getElementById('second')); break;
        case 2: showSecond(document.getElementById('third')); break;
    }

    currentIndex--;
}



function fadeOut(target, duration = 500) {
  return new Promise(resolve => {
      const animationEnded = () => {
          target.style.display = 'none';
          target.onanimationend = null;
          target.style.animation = null;
          resolve();
      };
      target.onanimationend = animationEnded;
      target.style.animation = `fade-out ${duration}ms 1`;
  });
}

function fadeIn(target, duration = 200, display = 'flex') {
  return new Promise(resolve => {
      const animationEnded = () => {
          target.onanimationend = null;
          target.style.animation = null;
          resolve();
      };
      target.onanimationend = animationEnded;
      target.style.display = display;
      target.style.animation = `fade-in ${duration}ms 1`;
  });
}

setInterval(showNext, 2000);



var faqElements = document.querySelectorAll('.togglefaq');

faqElements.forEach(function(element) {
  element.addEventListener('click', function(e) {
    e.preventDefault();

    faqElements.forEach(function(otherElement) {
      if (otherElement !== element && otherElement.classList.contains('active')) {
        var chevronIcon = otherElement.querySelector('.fa-chevron-up');
        chevronIcon.classList.add('fa-chevron-down');
        chevronIcon.classList.remove('fa-chevron-up');
        otherElement.classList.remove('active');
        var faqAnswer = otherElement.nextElementSibling;
        faqAnswer.style.display = 'none';
      }
    });

    this.classList.toggle('active');
    var chevron = this.querySelector('i');
    chevron.classList.toggle('fa-chevron-up');
    chevron.classList.toggle('fa-chevron-down');
    this.nextElementSibling.style.display = this.classList.contains('active') ? 'block' : 'none';
  });
});