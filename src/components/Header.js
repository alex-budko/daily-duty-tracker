import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <div className = 'header'>
            <h1>{title}</h1>
            <Button onAdd={onAdd} 
            text={showAdd ? 'Close' : 'Add'} 
            color={showAdd ? 'red' : 'green'} />
        </div>
    )
}

Header.defaultProps = {
    title: 'Duty Tracker',
}

export default Header