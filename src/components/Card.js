import {MdLocationOn} from 'react-icons/md'
export default function Card() {
    return (
        <div className="card--container">
            <img className="card--img" src="https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80" alt="tokyo" />
            <div className="card--stats">
                <span className="card--loc--infos"><MdLocationOn className="icon--location"/> J A P A N <a href="https://www.google.com/maps/d/viewer?mid=1Sacpp9a3_FG5iUG7Z9fLGGyefTE&hl=en" target="_blank" className="card--gmaps">View on Google Maps</a></span>
                <h1>TOKYO</h1>
                <p className="card--date">18 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--description">Tokyo is the largest urban economy in the world by gross domestic product, and is categorized as an Alpha+ city by the Globalization and World Cities Research Network. Tokyo is Japan's leading center of business and finance.</p>
            </div>
        </div>
    )
}