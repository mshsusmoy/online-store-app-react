import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Susmoy', 'Tanna', 'Sara']
    // const nameList = names.map(name => <div>{name}</div>)

    const persons = [
        {
            id: 1,
            name: "Susmoy",
            age: "25 Years"
        },
        {
            id: 2,
            name: "Tanna",
            age: "25 Years"
        },
        {
            id: 3,
            name: "Sara",
            age: "6 Months"
        }
    ]
    const personList = persons.map(person => 
        <Person person={person}/>  
    )

    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
