import getHash from "../utils/getHash";
import getData from "../utils/getData";


const Character = async() => {
  const id = getHash();//donde se esta moviendo
  const characters = await getData(id);

    const view = `
      <div class="Characters-inner">
        <article class=""Charcaters-card>
        <img src="${characters.image}" alt="${characters.name}">
        <h2>${characters.name}</h2>
        </article>
        <article class="Caharacters-card">
        <h3>Episodes: <span>${characters.episode.length}</span></h3>
        <h3>Status: <span>${characters.status}</span></h3>
        <h3>Species: <span>${characters.species}</span></h3>
        <h3>Gender: <span>${characters.gender}</span></h3>
        <h3>Origin: <span>${characters.origin.name}</span></h3>
        <h3>Last Location: ${characters.location.name}</h3>
        </article>      
      </div>  
    `;
    return view;
}

export default Character;