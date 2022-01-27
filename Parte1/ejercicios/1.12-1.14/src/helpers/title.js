
const title = (votes) => {
    /*Se obtiene un nuevo array solamente con los votos*/
    const moreVotes = votes.map((e) => {
        return e.votes
    })

    /*Del array con los votos obtengo el número mayor de votos*/
    let more = Math.max(...moreVotes);
    /*Busco ese número la posición que se encuentra del array*/
    let highestIndexVotes = moreVotes.indexOf(more)


    /*Si hay votos los muestro, sino muestro que no hay*/
    let title;
    if (more === 0) {
        title = "No hay votos por el momento"
    } else {
        title = `Anecdota con más votos: ${votes[highestIndexVotes].anecdotes} ${votes[highestIndexVotes].votes} votes`
    }

    return title
}

export default title;
