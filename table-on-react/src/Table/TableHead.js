import React from 'react'

export default function TableHead()
{
    return(
        <thead className = "header">
        <tr className = "header_row">
            <th className = "header_element">Surname</th>
            <th className = "header_element">Name</th>
            <th className = "header_element">Age</th>
            <th className = "header_element">Rating</th>
        </tr>
        </thead>
    )
}