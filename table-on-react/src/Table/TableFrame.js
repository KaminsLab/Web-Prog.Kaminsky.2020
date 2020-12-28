import React from 'react'
import TableHead from './TableHead.js'
import Students from './Students.js'
import FormAdd from '../Form/FormAdd.js'

function requestToJSON(students){
    var data = []
    var requestUrl = "https://raw.githubusercontent.com/KaminsLab/Web-Prog.Kaminsky.2020/master/table-on-react/students.json";
    fetch(requestUrl)
    .then((res) => {
        students = res.json();
    })

    return data;
}

export default function TableFrame()
{
    var students = [];
    return(
        <div className = "wrapper">
            <h1>Student's table</h1>
            <table className = "table">
                <TableHead />
                <Students data = {students}/>
            </table>
            <FormAdd data = {students}/>
        </div>
    )
}