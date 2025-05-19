document.addEventListener('DOMContentLoaded', () => {
    const hands = [
        'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55',
        '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s',
        'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs',
        'K9s', 'QJs', 'QTs', 'JTs', 'T9s', '98s', '87s', '76s', '65s',
        '54s', '43s', '32s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o',
        'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o', 'KQo', 'KJo', 'KTo',
        'K9o', 'QJo', 'QTo', 'JTo', 'T9o', '98o', '87o', '76o', '65o',
        '54o', '43o', '32o'
    ];

    const handsContainer = document.getElementById('hands');
    const handHistory = document.getElementById('handHistory');

    // Create buttons for each hand
    hands.forEach(hand => {
        const button = document.createElement('button');
        button.textContent = hand;
        button.addEventListener('click', () => {
            // Save hand to localStorage
            const history = JSON.parse(localStorage.getItem('handHistory') || '[]');
            history.push(hand);
            localStorage.setItem('handHistory', JSON.stringify(history));
            updateHistory();
        });
        handsContainer.appendChild(button);
    });

    // Update history list
    function updateHistory() {
        const history = JSON.parse(localStorage.getItem('handHistory') || '[]');
        handHistory.innerHTML = history.map(hand => `<li>${hand}</li>`).join('');
    }

    // Load history on startup
    updateHistory();
});

