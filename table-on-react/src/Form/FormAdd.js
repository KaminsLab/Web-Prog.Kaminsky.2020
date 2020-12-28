import React, {useState} from 'react'

export default function FormAdd(props)
{
    //const [surname, name, age, mark, setSurname, setName, setAge, setMark] = useState('');
    //var item = {}
    var surname = '', name ='', age='', mark='';
    function submitHandler(event)
    {
        event.preventDefault();
        if(!surname.trim())
        {
            console.log("empty data");
        }
        
        const items = props.data;
        items.concat([{
            firstName: name,
            lastName: surname,
            age: age,
            mark: mark,
            id: Date.now()
        }])
    }

    return(
        <form name="show" onSubmit={submitHandler}>
        <input type="text" onChange = {event => surname = event.target.value} name="lastNameInput" placeholder="Введите фамилию"></input>
        <input type="text" onChange = {event => name = event.target.value} name="firstNameInput" placeholder="Введите имя"></input>
        <input type="text" onChange = {event => age = event.target.value} name="ageInput" placeholder="Введите возраст"></input>
        <input type="text" onChange = {event => mark = event.target.value} name="markInput" placeholder="Введите отметку"></input>
        <input type="submit" name = "print" className="buttonAdd" value="Добавить студента" />
    </form>
    )
}