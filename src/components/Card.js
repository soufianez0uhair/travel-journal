import {MdLocationOn} from 'react-icons/md'
export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--img" src={props.card.imageUrl} alt={props.card.title} />
            <div className="card--stats">
                <span className="card--loc--infos"><MdLocationOn className="icon--location"/> {props.card.location} <a href={props.card.googleMapsUrl} target="_blank" className="card--gmaps">View on Google Maps</a></span>
                <h1>{props.card.title}</h1>
                <p className="card--date">{props.card.startDate} - {props.card.endDate}</p>
                <p className="card--description">{props.card.description}</p>
            </div>
        </div>
    )
}