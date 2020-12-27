import React from 'react'
import TableHead from './TableHead.js'
import Students from './Students.js'

export default function TableFrame()
{
    return(
        <div className = "wrapper">
            <h1>Student's table</h1>
            <table className = "table">
                <TableHead />
                <Students />
            </table>
        </div>
    )
}