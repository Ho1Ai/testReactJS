import React, {useState} from 'react'



const EachContainer = (props) => {

    return (
        <article className='toDoArticle'>
            <div style={{backgroundColor:props.color}} className='toDoArticleColor'>
                
            </div>

            <h3 className='articleName'>
                {props.name}
            </h3>

            <button onClick={()=>{props.remove(props.indexOfContainer)}} className='removeButton'>
                -
            </button>
        </article>
    )
}

export default EachContainer;