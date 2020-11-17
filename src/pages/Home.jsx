import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main id='home'>
      <div className='container flex'>
        <h1>La Casita Chaupin</h1>
        <p>
          Armoniza sus ambientes de Cafetería, Eco tienda Orgánica, Sala de Arte, Bed & Breakfast y
          Ceremonias con la energía Místico, Espiritual Ancestral.
        </p>
        <p>
          <i>¡Cada instante de tu vida es Única y Absoluta!</i>
        </p>
        <p>Amala</p>
        {/* <Link to='/menu' className='btn btn--primary'>
          See Menu
        </Link> */}
        <a
          href={process.env.PUBLIC_URL + '/assets/files/menu.pdf'}
          className='btn btn--primary'
          target='_blank'
          rel='noreferrer'
        >
          See Menu
        </a>
      </div>
    </main>
  );
};

export default Home;
