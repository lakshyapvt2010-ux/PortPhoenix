import './Card.css'

function Card({ children, className = '', onClick, style }) {
  return (
    <div
      className={`card ${className} ${onClick ? 'card-clickable' : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
}

export default Card
