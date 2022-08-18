'use strict';

{

    // ハンバーガーメニュー
    const menu = document.getElementById('menu');
    
    const humberger = document.querySelector('.humberger');

    menu.addEventListener('click', () => {
        humberger.classList.toggle('appear');
        menu.classList.toggle('close');
    });

    const skillMenu = document.getElementById('skillMenu');

    skillMenu.addEventListener('click', () => {
        humberger.classList.toggle('appear');
        skillMenu.classList.toggle('close')
    });

    // スライダー
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slides = document.querySelectorAll('.slides');

    let sliderCount = 0;

    console.log(sliderCount);

    prev.classList.add('hidden');
    
    next.addEventListener('click', () => {
        prev.classList.remove('hidden');
        slides[sliderCount].classList.remove('appear');
        sliderCount++;
        slides[sliderCount].classList.add('appear');
        if (sliderCount === 2) {
            next.classList.add('hidden');
        }
    });
    
    prev.addEventListener('click', () => {
        next.classList.remove('hidden');
        slides[sliderCount].classList.remove('appear');
        sliderCount--;
        slides[sliderCount].classList.add('appear');
        if(sliderCount === 0) {
            prev.classList.add('hidden');
        }
    });

    // モーダルウインドウ
    const detail = document.getElementById('detail');

    const modal = document.querySelector('.modal-window');

    detail.addEventListener('click', () => {
        modal.classList.add('appear');
        console.log('detail');
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('appear');
    });



    // タブメニュー
    const tabTitle = document.querySelectorAll('.tab-title');

    const tabText = document.querySelectorAll('.tab-text');




    
    for(let i = 0; i < tabTitle.length; i++) {
        tabTitle[i].addEventListener('click', () => {
            const show = document.querySelector('.show');

            const active = document.querySelector('.active');

            console.log(i);
            active.classList.remove('active');
            show.classList.remove('show');
            tabTitle[i].classList.add('active');
            tabText[i].classList.add('show');
        });
    }




    // アコーディオンUI
    const question = document.querySelectorAll('.q-text');

    const answer = document.querySelectorAll('.answer');
    
    question.forEach(e => {
        e.addEventListener('click', () => {
                question.forEach(question => {
                    if (e === question) {
                        question.classList.toggle('appear');
                        console.log('appear');
                    }
                })
            });
        });

   

    // Intersection Observer API
    const thank = document.getElementById('thank');

    const options = {
        root: null,
        threshold: 1
    }

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // intersectionRatio ターゲットの要素と交差領域の割合を取得
            // 100％交差した時に発火
            if (entry.intersectionRatio === 1) {
                entry.target.classList.add('appear');
                console.log('rotated');
                }  
        });
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(thank);

        


}
