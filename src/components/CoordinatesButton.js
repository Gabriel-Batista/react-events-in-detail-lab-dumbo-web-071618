import React from 'react'

export default class CoordinateButton extends React.Component   {
    handleMouseEvent = (event) => (
        console.log(event)
    )
    render()    {
        return (
            <button onClick={(event) => (this.props.onReceiveCoordinates([event.clientX, event.clientY]))}></button>
        )
    }
}
