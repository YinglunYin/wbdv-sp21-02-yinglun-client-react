import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const ImageWidget = (
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
                        <img width={widget.width} height={widget.height} src={widget.src}/>
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

                        <p>Image URL</p>
                        <input
                            onChange={(e) =>
                                setCachedWidget(
                                    {
                                        ...cachedWidget,
                                        src: e.target.value
                                    }
                                )
                            }
                            className="form-control"
                            value={cachedWidget.src}/>
                        <p>Image width</p>
                        <input
                            onChange={(e) =>
                                setCachedWidget(
                                    {
                                        ...cachedWidget,
                                        width: e.target.value
                                    }
                                )
                            }
                            className="form-control"
                            value={cachedWidget.width}/>
                        <p>Image height</p>
                        <input
                            onChange={(e) =>
                                setCachedWidget(
                                    {
                                        ...cachedWidget,
                                        height: e.target.value
                                    }
                                )
                            }
                            className="form-control"
                            value={cachedWidget.height}/>

                    </div>
                    <div className="col-2">
                        <i onClick={() => {
                            setEditing(false)
                            updateWidget(cachedWidget)
                        }} className="fas fa-check px-1 text-success float-right"/>

                        <Link to={back} className="text-danger float-right">
                            <i onClick={() => {
                                setEditing(false)
                                deleteWidget(widget)
                            }} className="fas fa-times"/>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default ImageWidget