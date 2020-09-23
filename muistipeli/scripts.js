    let clickedCard = null;
    let preventClick = false;
    let combosFound = 0;

    const colors = [
        'pink',
        'cyan',
        'yellow',
        'purple',
        'orange',
        'blue',
        'green',
        'red',
    ];

    const cards = [...document.querySelectorAll('.kort')];
    for (let color of colors) {
        const cardAIndex = parseInt(Math.random() * cards.length);
        const cardA = cards[cardAIndex];
        cards.splice(cardAIndex, 1);
        cardA.className += `${color}`;
        cardA.setAttribute('data-color', color);

        const cardBIndex = parseInt(Math.random() * cards.length);
        const cardB = cards[cardBIndex];
        cards.splice(cardBIndex, 1);
        cardB.className += `${color}`;
        cardB.setAttribute('data-color', color);
    }

    function klikattu(e) {
        const target = e.currentTarget;
        if  
        (preventClick || target === clickedCard || target.className.includes('done')) {
            return;
        }
        target.className = target.className
        .replace('color-hidden', '')
        .trim();
        
        
        if (!clickedCard) 
        {
            clickedCard = target;
        }   else if (clickedCard) {
            if (
                clickedCard.getAttribute('data-color') !==
                target.getAttribute('data-color'))
                { 
                preventClick = true;
                setTimeout(() => {
                    clickedCard.className = 
                        clickedCard.className.replace(' done', '').trim() +
                            ' color-hidden';
                    target.className = 
                        target.className.replace (' done', '').trim() +
                        ' color-hidden';
                    clickedCard = null; 
                    preventClick = false; 
                }, 1000); 
            }  else { 
                combosFound++;
                clickedCard = null;
                if (combosFound === 8) {
                    alert('Sinä Voitit');
                }
                }
            }
        }    
   