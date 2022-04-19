import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <div className = 'header'>
            <h1>{title}</h1>
            <Button color='green' onAdd={onAdd} text={showAdd ? 'Close' : 'Add'} />
        </div>
    )
}

Header.defaultProps = {
    title: 'Duty Tracker',
}

export default Header