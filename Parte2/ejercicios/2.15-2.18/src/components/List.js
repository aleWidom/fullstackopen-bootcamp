
const List = ({ persons, newFilter }) => {

  const filterPersons = persons.filter((person) => person.name.toUpperCase().includes(newFilter.toUpperCase()))

  return <div>
    {filterPersons.length > 0 ? filterPersons.map((e) => {
      return <p key={e.name}>{e.name} - {e.number}</p>
    }) : <p>No se encontraron resultados</p>}
  </div>;
};

export default List;
