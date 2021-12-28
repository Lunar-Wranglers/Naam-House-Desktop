import ImageComponent from '../ImageComponent'
import './card.css'

export default function Card({ id, title, icon, name, blurb1, blurb2, cardStyle, handlePointerEvent }) {
  return (
    <article className={`card ${cardStyle}`}>
      <div key={id} className="card" onMouseDown={handlePointerEvent} onTouchStart={handlePointerEvent}>
        <h2>{title}</h2>
        <div className='picholder'>
          <ImageComponent url={icon} text={name} />
        </div>
        <div className="blurbholder">
          <p>{blurb1}</p>
          <p>{blurb2}</p>
        </div>
      </div>
    </article>
  )
}