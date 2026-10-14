function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} as props value</p>
            <p>age: {props.age} </p>
            <p>Still studing:  {props.status ? 'yes' : 'no'}</p>
        </div>
    );
}
export default Student