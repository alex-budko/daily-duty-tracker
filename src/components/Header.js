import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("click")
    }
    return (
        <div className = 'header'>
            <h1>{title}</h1>
            <Button color='green' text='Add Duty' onClick={onClick} />
        </div>
    )
}

Header.defaultProps = {
    title: 'Duty Tracker',
}

export default Header