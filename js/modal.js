(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toogleModal);
  refs.closeModalBtn.addEventListener("click", toogleModal);

  function toogleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
