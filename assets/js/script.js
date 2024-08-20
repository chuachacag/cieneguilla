function toggleText() {
    const textContent = document.getElementById('textContent');
    const textContent1 = document.getElementById('textContent1');
    const textContent2 = document.getElementById('textContent2');
    const btn = document.getElementById('seeMoreBtn');
    const btn1 = document.getElementById('seeMoreBtn1');
    const btn2 = document.getElementById('seeMoreBtn2');
    
    if (textContent.classList.contains('expanded')) {
        textContent.classList.remove('expanded');
        btn.textContent = 'Ver más';
    } else {
        textContent.classList.add('expanded');
        btn.textContent = 'Ver menos';
    }

    if (textContent1.classList.contains('expanded')) {
        textContent1.classList.remove('expanded');
        btn1.textContent1 = 'Ver más';
    } else {
        textContent1.classList.add('expanded');
        btn1.textContent1 = 'Ver menos';
    }

    if (textContent2.classList.contains('expanded')) {
        textContent2.classList.remove('expanded');
        btn2.textContent2 = 'Ver más';
    } else {
        textContent2.classList.add('expanded');
        btn2.textContent2 = 'Ver menos';
    }
   
}

