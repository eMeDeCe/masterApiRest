import { Character } from './character.api-model';
import { graphQLClient } from 'core/api';

interface GetCharacterResponse {
  charactersByIds: Character;
}

export const getCharacter = async (id: number): Promise<Character> => {
  const query = `
  query {
    charactersByIds (ids: ${id}) { 
           id
           name
           status
           gender
             origin {
             name
             
           }
           image
           episode {
             name
           }
          
            location {
               name
           }
           created
         }
       
   }
  `;

 const { charactersByIds } = await graphQLClient.request<GetCharacterResponse>(
    query
    );
    return charactersByIds[0];
  };

