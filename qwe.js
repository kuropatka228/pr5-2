const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const gallery = document.querySelector('.gallery');

showBtn.addEventListener('click', function() {
  gallery.style.display = 'flex';
});

hideBtn.addEventListener('click', function() {
  gallery.style.display = 'none';
});

showBtn.addEventListener('click', function() {
  gallery.style.display = 'flex';
  showBtn.style.display = 'none';
  hideBtn.style.display = 'block';
});

hideBtn.addEventListener('click', function() {
  gallery.style.display = 'none';
  showBtn.style.display = 'block';
  hideBtn.style.display = 'none';
});

hideBtn.style.display = 'none';
