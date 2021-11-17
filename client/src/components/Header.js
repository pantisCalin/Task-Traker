import Button from "./Button";


const Header = ({ title, onAdd, showAdd}) => {
    return (
        <header className = 'header'>
            <h1 >Task Traker {title}</h1>
        <Button onClick = {onAdd} showAdd = {showAdd}/>
        </header>
       
    )
  
    }

export default Header
