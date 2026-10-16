 function Food(){
    const food1= 'orange'
    const food2= 'banana'
    const items = ['Apple', 'Banana', 'Cherry'];
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <h1>My Fruit List</h1>
            <ol>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </ul>
    );
 }
 export default Food