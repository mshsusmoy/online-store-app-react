import React, { createElement } from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Susmoy!! This is Hello Function</h1>
    //     </div>
    // )

    return React.createElement('div',
    {id: 'hello', className: 'dummyClass'},
    createElement('h1',null,'Hello Susmoy!'))
    
}

export default Hello