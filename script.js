let selectedVoice = 0; // 0 = 랜덤, 1~4 = 고정

const path = window.location.pathname.split("/").pop();

const map = {
    "hira.html": "tab1",
    "kata.html": "tab2",
    "bubble.html": "tab3",
    "grammar.html": "tab4",
    "index.html": "homeTab",
    "news.html": "tab6",
    "kanji.html": "tab7",
    "anki.html": "tab8",
    "show.html": "tab9"
};

const activeId = map[path];

if (activeId) {
        const activeBtn = document.getElementById(activeId);
        if (activeBtn) activeBtn.classList.add("active");
    }

function selectChar(td, kana, romaji) {
    document.getElementById("bigDisplay").textContent = kana;

    let voiceFolder;

    if (selectedVoice === 0) {
        // 랜덤 모드
        voiceFolder = Math.floor(Math.random() * 4) + 1;
    } else {
        // 선택된 성우 고정
        voiceFolder = selectedVoice;
    }

    let audio = new Audio(`audio/${voiceFolder}/${romaji}.mp3`);
    audio.play();
}

function setVoice(num) {
    selectedVoice = num;

    // 버튼 active 표시 변경
    document.querySelectorAll('.voice-select button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}
