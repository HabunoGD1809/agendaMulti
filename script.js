document.addEventListener('DOMContentLoaded', function () {
   const formularioContactos = document.getElementById('contact-form');
   const listaContactos = document.getElementById('contact-list');

   cargarContactos();

   formularioContactos.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      const contact = { name, email, phone };

      addContact(contact);

      formularioContactos.reset();

      cargarContactos();
   });

   function cargarContactos() {
      listaContactos.innerHTML = '';

      for (let i = 0; i < localStorage.length; i++) {
         const key = localStorage.key(i);
         const contact = JSON.parse(localStorage.getItem(key));

         const li = document.createElement('li');
         li.innerHTML = `<strong>${contact.name}</strong> - ${contact.email} - ${contact.phone}`;
         listaContactos.appendChild(li);
      }
   }

   function addContact(contact) {
      const key = `contact_${Date.now()}`;
      localStorage.setItem(key, JSON.stringify(contact));
   }
});
