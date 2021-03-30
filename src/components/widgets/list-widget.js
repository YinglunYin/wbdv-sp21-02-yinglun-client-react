import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const ListWidget = (
    {
        widget,
        to,
        back,
        deleteWidget,
        updateWidget
    }
) => {
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <div>
            {
                !editing &&
                <div className="row">
                    <div className="col-11">
                        {
                            cachedWidget.ordered &&
                            <>
                                <ol>
                                    {
                                        cachedWidget.text.split("\n").map((item) => {
                                            return (
                                                <li>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </>

                        }
                        {
                            !cachedWidget.ordered &&
                            <ul>
                                {
                                    cachedWidget.text.split("\n").map((item) => {
                                        return (
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>

                    <Link to={to} className="col-1">
                        <i onClick={() => {
                            setEditing(true)
                        }} className="fas fa-pen px-1 float-right"/>
                    </Link>

                </div>
            }

            {
                editing &&
                <div className="row">

                    <div className="col-10">
                        <select onChange={(e) =>
                            setCachedWidget(
                                {
                                    ...cachedWidget,
                                    type: e.target.value
                                }
                            )
                        }
                                className="form-control"
                        >
                            {widget.type === "HEADING" ? <option value="HEADING"
                                                                 selected>Heading</option>
                                                       : <option value="HEADING">Heading</option>}
                            {widget.type === "PARAGRAPH" ? <option value="PARAGRAPH"
                                                                   selected>Paragraph</option>
                                                         : <option
                                 value="PARAGRAPH">Paragraph</option>}
                            {widget.type === "LIST" ? <option value="LIST" selected>List</option>
                                                    : <option value="LIST">List</option>}
                            {widget.type === "IMAGE" ? <option value="IMAGE" selected>Image</option>
                                                     : <option value="IMAGE">Image</option>}
                        </select>

                        <br/>
                        <input checked={cachedWidget.ordered}
                               type="checkbox"
                               onChange={(e) => {
                                   setCachedWidget(
                                       {
                                           ...cachedWidget, ordered: e.target.checked
                                       })
                               }}
                        /> Ordered
                        <br/>
                        <h6>List Item</h6>
                        <textarea
                            onChange={(e) =>
                                setCachedWidget({
                                                    ...cachedWidget,
                                                    text: e.target.value
                                                })}
                            value={cachedWidget.text}
                            rows={10}
                            placeholder="Enter one item per line"
                            className="form-control"/>

                    </div>

                    <div className="col-2">
                        <i onClick={() => {
                            setEditing(false)
                            updateWidget(cachedWidget)
                        }} className="fas fa-check px-1 text-success float-right"/>

                        <Link to={back} className="text-danger">
                            <i onClick={() => {
                                setEditing(false)
                                deleteWidget(widget)
                            }} className="fas fa-times float-right"/>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default ListWidget