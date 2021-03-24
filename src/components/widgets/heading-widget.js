import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const HeadingWidget = (
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
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
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
                            {widget.type === "HEADING" ? <option value="HEADING" selected>Heading</option>
                                               : <option value="HEADING">Heading</option>}
                            {widget.type === "PARAGRAPH" ? <option value="PARAGRAPH" selected>Paragraph</option>
                                               : <option value="PARAGRAPH">Paragraph</option>}
                        </select>

                        <input
                            onChange={(e) =>
                                setCachedWidget(
                                    {
                                        ...cachedWidget,
                                        text: e.target.value
                                    }
                                )
                            }
                            className="form-control"
                            value={cachedWidget.text}/>

                        <select onChange={(e) =>
                            setCachedWidget(
                                {
                                    ...cachedWidget,
                                    size: parseInt(e.target.value)
                                }
                            )
                        }
                                className="form-control"
                        >
                            {widget.size === 1 ? <option value={1} selected>Heading 1</option>
                                               : <option value={1}>Heading 1</option>}
                            {widget.size === 2 ? <option value={2} selected>Heading 2</option>
                                               : <option value={2}>Heading 2</option>}
                            {widget.size === 3 ? <option value={3} selected>Heading 3</option>
                                               : <option value={3}>Heading 3</option>}
                            {widget.size === 4 ? <option value={4} selected>Heading 4</option>
                                               : <option value={4}>Heading 4</option>}
                            {widget.size === 5 ? <option value={5} selected>Heading 5</option>
                                               : <option value={5}>Heading 5</option>}
                            {widget.size === 6 ? <option value={6} selected>Heading 6</option>
                                               : <option value={6}>Heading 6</option>}
                        </select>
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

export default HeadingWidget