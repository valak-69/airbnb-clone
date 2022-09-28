import starImage from '../assets/star.png';

export default function Card(props){
    let badge
    if(props.element.openSpots==0){
        badge="SOLD OUT"
    }else if(props.element.location==="Online"){
        badge="ONLINE"
    }
    return(
        <div className="card">
            {badge && <div className='sold'>{badge}</div>}
            <img className='card-image' src={props.element.img} alt="" />
            <div className="card-stats">
                <img className='star' src={starImage} alt="" />
                <span>{props.element.stats.rating}</span>
                <span className='gray'>({props.element.stats.reviewCount}) •</span>
                <span className='gray'>{props.element.location}</span>
            </div>
            <p>{props.element.title}</p>
            <p><span className="bold">From ${props.element.price}</span> / person</p>
        </div>
    )
}