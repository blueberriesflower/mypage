const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
  let maxWidth = progressBar.parentElement.offsetWidth;
  let currentWidth = parseInt(progressBar.style.width, 10);
  
progressBar.parentElement.addEventListener('mousemove', (event) => {
    let mouseX = event.clientX - progressBar.parentElement.offsetLeft; 
    let newWidth = (mouseX / maxWidth) * 100;
    progressBar.style.width = newWidth + '%';
});

progressBar.parentElement.addEventListener('mouseleave', () => {
    progressBar.style.width = currentWidth + '%';
    });
});
progressBars.forEach(progressBar => {
    let maxWidth = progressBar.parentElement.offsetWidth; 
    let currentWidth = parseInt(progressBar.style.width, 10); 

progressBar.parentElement.addEventListener('mousemove', (event) => {
    let mouseX = event.clientX - progressBar.parentElement.offsetLeft; 
    let newWidth = (mouseX / maxWidth) * 100;
    progressBar.style.width = newWidth + '%';
});
  
progressBar.parentElement.addEventListener('mouseleave', () => {
    progressBar.style.transition = 'width 0.5s ease';
    progressBar.style.width = currentWidth + '%';
    });
});