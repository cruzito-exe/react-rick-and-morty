function Character({character}) {
  return (
   <div className='text-center p-5 card card-boy py-5 text-dark mt-5 me-4'>
    <img className='img fluid rounded-pill' src={character.image} alt={character.name}/>
    <h3> {character.name} </h3> 
    <h5> Origin: {character.origin.name} </h5>
    <h5> Species: {character.species} </h5> 
   </div>
  )
}

export default Character;