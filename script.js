function showVerse(mood) {
    fetch('verses.json')
      .then(response => response.json())
      .then(data => {
        const moodVerses = data[mood];
        const randomVerse = moodVerses[Math.floor(Math.random() * moodVerses.length)];
        
        const verseBox = document.getElementById("verseDisplay");
        verseBox.innerHTML = `
          <p class="mb-2 text-xl font-semibold">"${randomVerse.verse}"</p>
          <p class="text-gray-600 italic">${randomVerse.reference}</p>
        `;
        verseBox.classList.remove('hidden');
      });
  }
  