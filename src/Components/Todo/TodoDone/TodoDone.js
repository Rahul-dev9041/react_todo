import React from 'react'

function TodoDone({donetodo}) {
    return (
        <div className='container mt-6'>
            <div className="title">
                Done
            </div>
            <div className="columns">
                <div className="column">
                    {donetodo}
                </div>
            </div>
        </div>
    )
}

export default TodoDone
