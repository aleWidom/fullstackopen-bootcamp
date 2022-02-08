import Button from "./Button";
import {deletePerson} from "../services/persons"

const List = ({ persons, newFilter, setPersons }) => {

  const deleteClick = (person) => () => {
   const confirmDelete = window.confirm("Está seguro que desea eliminar el nombre de la agenda " + person.name)
   if(confirmDelete) {
    deletePerson(person.id)
    .then((response)=> {
      const personAgend = persons.filter((e)=> e.id !== person.id)
      return setPersons([...personAgend])
    })
    .catch((err)=> alert(err))
  } 
}

  const filterPersons = persons.filter((person) => person.name.toUpperCase().includes(newFilter.toUpperCase()))

  return <div>
    {filterPersons.length > 0 ? filterPersons.map((e) => {
      return <div key={e.name} > 
       <p style={{display: "inline-block"}}>{e.name} - {e.number} </p>
       <Button title={"Delete"} handleClick={deleteClick(e)} />
      </div>
    }) : <p>No se encontraron resultados</p>}
  </div>;
};

export default List;
