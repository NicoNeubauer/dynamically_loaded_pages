fetch('js/menu.json')                           // Hent menyen fra js/menu.json
  .then(res=>res.json())                        // Gjør om til JSON
  .then(data=>{
    let menu = document.querySelector('nav ul');// Hent referanse til menyen
    data.forEach((menuItem, idx)=>{             // Gå gjennom alle menyelemtene i JSON dataene
      let li = document.createElement('li');    // Lag nytt menyelement
      let active = '';
      if (idx==page) {                          // Dersom det er aktiv forside
        active = ' class="active"';
        document.querySelector('section h1').innerHTML = menuItem.subject;
        document.querySelector('head title').innerHTML = menuItem.subject;
      }
      // Legg til linken som innerHTML i menyelementet
      li.innerHTML = `<a href=${menuItem.href}${active}>${menuItem.html}</a>`;
      menu.appendChild(li);                     // Legg til menyelementet i menyen
    })
  });
