import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    //location = useLocation()
    return (
        <div className = 'header'>
            <h1>{title}</h1>
            { //location.pathname === '/' && 
            (
                <Button onAdd={onAdd} 
                    text={showAdd ? 'Close' : 'Add'} 
                    color={showAdd ? 'red' : 'green'}
                 />
            )
            }  
        </div>
    )
}

Header.defaultProps = {
    title: 'Duty Tracker',
}

export default Header