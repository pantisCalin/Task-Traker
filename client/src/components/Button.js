
const Button = ({onClick, showAdd}) => {

    return (
        
        <button className = {showAdd? "btnred" : "btn"} onClick = {onClick}>
            {showAdd? "Back" : "Add"}
        </button>
        
    )
}

export default Button
