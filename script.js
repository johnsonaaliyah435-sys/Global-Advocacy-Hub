// Chat functionality
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatLog = document.getElementById('chatLog');

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== "") {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = "You: " + message;
        chatLog.appendChild(msgDiv);
        chatInput.value = "";
        chatLog.scrollTop = chatLog.scrollHeight;
    }
});

// Mini-story buttons
const storyBtns = document.querySelectorAll('.storyBtn');
const storyOutput = document.getElementById('storyOutput');

storyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        storyOutput.textContent = btn.dataset.story;
    });
});

// Color picker functionality
const colorPicker = document.getElementById('colorPicker');
document.body.style.backgroundColor = colorPicker.value;

colorPicker.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
});

// Floating sparkles effect
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 300);

// Sparkle CSS (added dynamically)
const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
.sparkle {
    width: 5px;
    height: 5px;
    background: yellow;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0 8px 2px yellow;
    pointer-events: none;
    animation: sparkleAnim 2s linear forwards;
}

@keyframes sparkleAnim {
    0% { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-50px) scale(0); }
}
`;
document.head.appendChild(sparkleStyle);
