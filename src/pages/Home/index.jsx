import React, { useEffect, useState } from 'react';

import { gql } from "@apollo/client";

import client from '../../gql/client';

// 
function Home() { 

    const [city, setCity] = useState({
        name: '"Jaboatao dos Guararapes"'
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
        <main>
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
                                <div>
                                    <h2>{city.data.name}</h2>
                                    <h4>{city.data.country}</h4>
                                    <p>{city.data.weather.summary.description}</p>
                                    <p>{celsius()}°C</p>
                                </div>
                            ) : (
                                <p>loading...</p>
                            )   
                            }
                        </div>
                    ) : (
                        <p>Sorry :(</p>
                    )
                }
            </div>
        </main>
    );
}

export default Home;