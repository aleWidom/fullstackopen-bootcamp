
const List = ({persons}) => {
  return <div>
      {persons.map((e)=> {
         return <p key={e.id}>{e.name} - {e.number}</p>
      })}
  </div>;
};

export default List;
