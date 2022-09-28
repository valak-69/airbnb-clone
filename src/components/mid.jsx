import imageGrid from '../assets/photo-grid.png';

export default function Mid(){
    return(
        <section>
            <div className='img-container'>
                <img className='mid-image' src ={imageGrid} alt="" />
            </div>
            <h1 className='mid-title'>Online Experiences</h1>
            <p className='mid-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}