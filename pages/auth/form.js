function showPopupBanner() {
  let banner = document.createElement('div');
  banner.className = 'popup-banner';
  banner.innerHTML = '<strong>регистрация завершена</strong>';

  let form = document.querySelector('form');
  form.appendChild(banner);

  setTimeout(() => {
    banner.style.display = 'none';
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      showPopupBanner();
      form.reset();
    });
  });