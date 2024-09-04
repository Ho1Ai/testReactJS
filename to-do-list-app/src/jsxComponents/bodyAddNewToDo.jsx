import React from "react";

const AddNewToDo = (props) => {
    const pushNewToDoActivity = () => {
        let a = document.getElementById('newLine')
        if (a.value.trim()!=='') { // вообще не добавил это еще в самом первом коммите только из-за того, что мне нужно было бы работать с localStorage, поэтому я решил облегчить себе жизнь и оставить возможность добавлять пустые строки 
            props.pushing(a.value) 
            a.value = "" // cleaning input
        } 
    }

    return (
        <>
            <div className="adder">
                <div className="newToDoContainer">
                    <input type="text" className="newToDoInput" id="newLine"/>

                    <button className="newToDoAdd" onClick={pushNewToDoActivity}>+</button>
                </div>
            </div>
            
        </>
    )
}

export default AddNewToDo;
