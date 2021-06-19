import React from "react"


export default (props) => {
    return (
        <div>
            <label htmlFor="PassoInput">Passo: </label>
            <input 
                id="PassoInput" 
                type="number"
                value={props.passo} 
                onChange = {e => props.setPasso(+e.target.value)}/>
        </div>
    )
}