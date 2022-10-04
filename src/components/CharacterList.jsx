import {useEffect, useState} from 'react';
import Character from './Character';

function NavPage(props) {
  return (
   <header className='d-flex justify-content-between align-items-center'>
    <p onClick={() => props.setPage(props.page-1)}> Página {props.page} </p>
    <button className='btn btn-primary sm mb-4' onClick={() => props.setPage(props.page+1)}> Página {props.page+1} </button>
   </header>
  )
 }

function CharacterList() {
 const [characters, setCharacters] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);

 useEffect(() => {
  async function fetchData() {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    setLoading(false);
    setCharacters(data.results);
  }
  fetchData();
 }, [page]);

 return (
  <div className='container'>
   {loading ? (
    <h1> Cargando... </h1>
   ) : (   
    <div className='row'>
     {characters.map(character => {
      return (
       <div className='col-md-4'>
        <Character key={character.id } character={character}/>
       </div>
      );
     })}
    </div>
   )}
   <NavPage page={page} setPage={setPage}/>
  </div>
 );
}

export default CharacterList;