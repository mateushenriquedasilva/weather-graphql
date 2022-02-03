import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux'

import { Container } from './styles';

import moment from 'moment';

import LightModeIcon from '@mui/icons-material/LightMode';

function Nav() {

  const city = useSelector(state => state.name.name)

  return (
      <Container>
          <div className='logo-and-links'>
            <h1>Weather GraphQL</h1>
            <aside>
              <Link to="/">Home</Link>
              <Link to="/mycity">My City</Link>
            </aside>
          </div>
          <div className='container'>
            <aside>
              <p>{city}</p>
              <p>{moment().format('lll')}</p>
            </aside>
            <LightModeIcon />
          </div>

      </Container>
  );
}

export default Nav;