import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to = '/somewhere/to/go',
        back = 'somewhere',
        deleteItem = (item) => alert("delete " + item.title),
        updateItem,
        item = {title: "Some Title", _id: "Some Id"}
    }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    {item.title}
                    <i onClick={() => setEditing(true)} className="fas fa-pen px-1"/>
                </>
            }

            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem(
                                {
                                    ...cachedItem,
                                    title: e.target.value
                                }
                            )
                        }
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check px-1"/>

                    <Link to={back} className="">
                        <i onClick={() => {
                            setEditing(false)
                            deleteItem(item)
                        }} className="fas fa-times"/>
                    </Link>
                </>
            }


        </>
    )

}

export default EditableItem