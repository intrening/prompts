const promptsContainer = document.getElementById('prompts-container');

// Загружаем промпты из файла JSON
fetch('prompts.json')
  .then(response => response.json())
  .then(prompts => {
    prompts.forEach(prompt => {
      const div = document.createElement('div');
      div.className = 'prompt';
      div.textContent = prompt.text;
      promptsContainer.appendChild(div);
    });
  })
  .catch(error => console.error('Error loading prompts:', error));

// Фильтрация промптов по введенному тексту
function filterPrompts() {
  const query = document.getElementById('search').value.toLowerCase();
  const prompts = document.querySelectorAll('.prompt');
  prompts.forEach(prompt => {
    if (prompt.textContent.toLowerCase().includes(query)) {
      prompt.style.display = '';
    } else {
      prompt.style.display = 'none';
    }
  });
}
