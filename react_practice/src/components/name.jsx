function Name(props) {
  return(
    <div>
        <h1>Hello : {props.name}</h1>
        <p>My age is: {props.age}</p>
        <p>My role is: {props.role}</p>
        <p>My University is: {props.uni}</p>
    </div>
  )
}
export default Name;