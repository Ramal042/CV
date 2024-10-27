import React from 'react';
 
function Header() {
  return (
    <header className="header">
        <img src="./men.jpg" style={{borderRadius: '50px'}} width={80} height={70} alt="" />
      <h1>Ramal Bagirzade</h1>
      <p className="position">Vəzifə (Frontend Developer)</p>
      <p>Email: ramalbagirzade@mail.com | Telefon: +994 55-942-93-42</p>
    </header>
  );
}


export default Header;