let clickCount = 0;
const duck = document.getElementById('duck');
const gameContainer = document.getElementById('game-container');
const wishContainer = document.getElementById('wish-container');
const instruction = document.getElementById('game-instruction');

// হাঁসটি ক্লিক (বা টাচ) করলে যা হবে
duck.addEventListener('click', function () {
    clickCount++;

    if (clickCount < 5) {
        // প্রথম ৪ বার হাঁসটি স্ক্রিনের যেকোনো র‍্যান্ডম জায়গায় পালিয়ে যাবে
        instruction.innerText = `ধরো ধরো! চেষ্টা করো (${clickCount} / 4 বার মিস)`;

        // স্ক্রিনের সাইজ অনুযায়ী র‍্যান্ডম পজিশন হিসাব
        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 150;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY) + 50; // উপর থেকে কিছুটা নিচে রাখার জন্য

        duck.style.left = randomX + 'px';
        duck.style.top = randomY + 'px';
        duck.style.transform = 'none'; // মাঝখানের পজিশন ভেঙে দেওয়া
    } else {
        // ৫ম বারে গেম শেষ এবং উইশ সেকশন চালু
        gameContainer.classList.add('hidden');
        wishContainer.classList.remove('hidden');
    }
});