import Pokemon from "./pokemon";
import './index.css';
function Pokedex(){
            const click1 = () => {studentlist.id};
    const list = {
      
    }
  
    return(
      <>
      <button onClick = {click1}>Test</button>
        {Object.keys(list).map((key) => {
          const studentlist = list[key];
          return (
            <Student
              key={key}
              id={studentlist.id}
              name={studentlist.name}
              email={studentlist.email}
            />
          );
          })}
      </>
    )
}

export default Pokedex