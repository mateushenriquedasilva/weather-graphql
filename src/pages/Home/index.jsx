import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_CITY_BY_NAME  } from '../../gql/query';

function Home() {

    const { loading, error, data } = useQuery(GET_CITY_BY_NAME);
    function celsius(){
        let celsius = data.getCityByName.weather.temperature.actual - 273;
        return celsius.toFixed(0);
    }

    return (
        <main>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
            <div>
                <div>
                    <h2>{data.getCityByName.name}</h2>
                    <p>{data.getCityByName.weather.summary.description}</p>
                    <p>{celsius()}°C</p>
                </div>
            </div>
            )}
        </main>
    );
}

export default Home;