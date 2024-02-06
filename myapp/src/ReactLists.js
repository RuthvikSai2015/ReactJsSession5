function ReactLists(){

    const Movies = [
        {id:123,name:"Movie1"},
        {id:456,name:"Movie2"},
        {id:789,name:"Movie3"}
    ]
    return (
        <ul>
            {
                Movies.map((data) => 
                   <li key={data.id}>
                       {data.name}
                   </li>
                )
            }
        </ul>
    )
}
export default ReactLists;