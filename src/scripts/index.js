import 'flowbite/dist/flowbite.min.js'

// モーダルの背景処理を追加
document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('default-modal-backdrop');
  const modalTriggers = document.querySelectorAll('[data-modal-toggle="default-modal"]');
  const modalClosers = document.querySelectorAll('[data-modal-hide="default-modal"]');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      modalBackdrop.classList.remove('hidden');
    });
  });

  modalClosers.forEach(closer => {
    closer.addEventListener('click', () => {
      modalBackdrop.classList.add('hidden');
    });
  });
});
