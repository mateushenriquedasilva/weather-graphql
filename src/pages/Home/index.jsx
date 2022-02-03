import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { gql } from "@apollo/client";
import client from '../../gql/client';

import { Container } from './styles';

function Home() { 

    const nameCity = useSelector(state => state.name.name)

    const [city, setCity] = useState({
        name: `"${nameCity}"`
    })

    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    let nomeDaCidadeSemAcento = search.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const [request, setRequest] = useState(true)
    
    useEffect(() => {
        initial()
    },[request])

    function initial() {
        client.query({
            query: gql`
                query {
                    getCityByName(name: ${city.name}){
                        name
                        country
                        weather{
                            summary{
                                description
                            }
                            
                            temperature{
                                actual
                            }
                        }
                    }
                }
            `
        }).then(resp => {
            setCity({...city, data: resp.data.getCityByName})
            setLoading(true)
        })
        .catch(error => console.log(error))
    }

    function celsius() {
        let celsius = city.data.weather.temperature.actual - 273
        return celsius.toFixed(0)
    }

    return (
        <Container>
            <input type="text" onChange={(e) => {
                setSearch(e.target.value)
            }}/>

            <button onClick={() => {
                setCity({...city, name: `"${nomeDaCidadeSemAcento}"`})
                request ? setRequest(false) : setRequest(true)
                setLoading(false)
            }}>Buscar</button>

            <div>
                {
                    city.data ? (
                        <div>
                            {loading ?(
                                <div className='weather-container'>
                                    <p className='temperature'>{celsius()}<sup>°C</sup></p>
                                    <aside>
                                        <h2>{city.data.name}</h2>
                                        <h4>{city.data.country}</h4>
                                        <p>{city.data.weather.summary.description}</p>
                                    </aside>
                                </div>
                            ) : (
                                <p>loading...</p>
                            )   
                            }
                        </div>
                    ) : (
                        <p>City ​​not found :(</p>
                    )
                }
            </div>
        </Container>
    );
}

export default Home;