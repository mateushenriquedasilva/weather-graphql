import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { getName } from '../../redux/slice/nameCity/nameCity';

// import { Container } from './styles';

function City() {

  const [myCity, setMyCity] = useState()
  const dispatch = useDispatch()

  function postMyCity() {
    let nomeDaCidadeSemAcento = myCity.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    dispatch(getName(nomeDaCidadeSemAcento))
  }

  return (
      <main>
          <h2>Save My City</h2>
          <input type="text" onChange={(e) => setMyCity(e.target.value)}/>
          <button onClick={postMyCity}>Salvar</button>
      </main>
  );
}

export default City;