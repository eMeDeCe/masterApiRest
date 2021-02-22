export interface Comment {
  id : number,
  text : string,
  exist: boolean, 
}

  export const createEmptyComment = (): Comment => ({
    id: 0,
    text: "",
    exist: false
  });
  
  