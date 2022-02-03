import { gql } from "@apollo/client";

export const GET_CITY_BY_NAME = gql`
    query {
        getCityByName(name: "Recife"){
            name
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
`;