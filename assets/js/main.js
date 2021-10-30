document.addEventListener('DOMContentLoaded', () => {
  // votre code ici...
  console.log('Hello');

  document.getElementById('signup').addEventListener('click', () => {
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('body-id').classList.add('hidde-scrollbar');
  });

  document.getElementById('modal-escape').addEventListener('click', () => {
    document.getElementById('form-modal').classList.add('hidden');
    document.getElementById('body-id').classList.remove('hidde-scrollbar');
  });

  document
    .getElementById('contactForm')
    .addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
      };

      document.getElementById('contactForm').reset();

      await axios.post('https://tripadvisor-api.herokuapp.com/form', data);
    });
});
