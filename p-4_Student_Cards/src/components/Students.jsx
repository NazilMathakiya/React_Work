function Students(props){
    return(
        <div>
            <h1>Student Cards</h1>
            <div>
                <h2>Student Name is : {props.name}</h2>
                <h2>Student Age is : {props.age}</h2>
                <h2>Student Course is : {props.course}</h2>
                <h2>Student City is : {props.city}</h2>
            </div>
        </div>
    )
}

export default Students;