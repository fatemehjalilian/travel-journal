import marker from '../assets/map-marker.svg'

export default function Entry(props){
    return(
        <>
            <article className='journal-entry'>
                <div className='main-image-container'>
                    <img className='main-image' src={props.img.src} alt={props.img.alt} />
                </div>
                
                <div className='description'>
                    <img className='marker-map' src={marker} alt='marker icon' />
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                    <h2>{props.title}</h2>
                    <p>{props.dates} </p>
                    <p>{props.text} </p>
                </div>
            </article>

        </>
    )
}