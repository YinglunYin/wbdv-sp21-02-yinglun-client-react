import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const ParagraphWidget =(
    {
        widget,
        to,
        back,
        deleteWidget,
        updateWidget
    }
) =>{
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)

    return(
        <div>
            {
                !editing &&
                <div className="row">
                    <div className="col-11">
                        <p>
                            {widget.text}
                        </p>
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
                                className="form-control">
                            {widget.type === "HEADING" ? <option value="HEADING" selected>Heading</option>
                                                       : <option value="HEADING">Heading</option>}
                            {widget.type === "PARAGRAPH" ? <option value="PARAGRAPH" selected>Paragraph</option>
                                                         : <option value="PARAGRAPH">Paragraph</option>}
                        </select>

                        <textarea
                            value={cachedWidget.text}
                            className="form-control"
                            onChange={(e) =>
                                setCachedWidget(
                                    {
                                        ...cachedWidget,
                                        text: e.target.value
                                    }
                                )
                            }>

                        </textarea>

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

export default ParagraphWidget