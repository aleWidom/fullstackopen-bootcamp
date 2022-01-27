
const handleVotes = (votes, setVotes, selected) => {
 /*Se ejecuta esta función cada vez que hay un voto nuevo, se reemplaza el objeto que contiene la informacion agrengando el voto según el indice que se saca a través del numero seleccionado y se le suma uno*/
 const handleVotes = () => () => {
    setVotes(
      [...votes],
      votes[selected].votes = votes[selected].votes + 1
    )
  }
};

export default handleVotes;
