import styled from 'styled-components';

export const Container = styled.aside`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    div.weather-container {
        display: flex;
        align-items: center;
        -webkit-box-shadow: 1px 4px 17px 2px rgba(0,0,0,0.11); 
        box-shadow: 1px 4px 17px 2px rgba(0,0,0,0.11);
        gap: 1rem;

        padding: 1rem;
        border-radius: .5rem;

        

        p.temperature {
            font-size: 4rem;

            sup {
                font-size: 2.2rem;
            }
        }

        aside {

            display: flex;
            flex-direction: column;
            align-items: flex-end;

            h2 {
                font-size: 1.1rem;
            }
        }
    }
`;