const Button = ({color, text, onAdd}) => {
    return (
        <button onClick={onAdd} style={{ backgroundColor: color }} 
        className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color:'red'
}


export default Button