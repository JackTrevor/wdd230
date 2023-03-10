const formLoadedTimeInput = document.getElementById('form-loaded-time');
const timeNow = new Date();
formLoadedTimeInput.value = now.toLocaleString();

const positionInput = document.getElementById('position');
positionInput.pattern = '[A-Za-z -]{7,}';