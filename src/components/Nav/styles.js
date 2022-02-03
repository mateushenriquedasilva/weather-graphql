import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    -webkit-box-shadow: 1px 4px 17px 2px rgba(0,0,0,0.11); 
    box-shadow: 1px 4px 17px 2px rgba(0,0,0,0.11);

    margin-bottom: 2rem;
    padding: 1.3rem 4rem;

    font-size: 1.2rem;

    div.logo-and-links {

        display: flex;
        align-items: center;

        h1 {
            color: #333;
        }   

        aside {
            margin-left: 2rem;

            a {
                text-decoration: none;
                margin-right: 1rem;
                color: #333;

                &:hover {
                    color: blue;
                }
            }
        }
    }

    div.container {
        display: flex;
        gap: 2rem;
        align-items: center;

        svg {
            cursor: pointer;
        }
        
        p {
            font-size: .9rem;
        }
    }

    

    
`;