import './index.css';
function Pokemon({ name, email,id,}){
   return(
    <div className="pokedex">
         <h1>{id}</h1>
         <p>{name}</p>
         <p>{email}</p>
    </div>
   )
}

export default Pokemon