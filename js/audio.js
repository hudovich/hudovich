function clickSound() {
     const audio = document.getElementById('audio');
    if (audio) { // Проверяем наличие элемента
        audio.currentTime = 0; // Сбрасываем аудио к началу
        audio.play().catch(error => console.error('Ошибка воспроизведения:', error));
    } else {
        console.warn('Элемент аудио не найден.');
    }
}