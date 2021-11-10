import "../idCard.css"

function IdCard(props) {
    return (
        <div className="idCard">
            <img src={props.picture} alt="" />
            <div className='info'>
                <ul>
                    <li><strong>First name:</strong> {props.firstName}</li>
                    <li><strong>Last name:</strong> {props.lastName}</li>
                    <li><strong>Gender:</strong> {props.gender}</li>
                    <li><strong>Height:</strong> {props.height}</li>
                    <li><strong>Bird:</strong> {props.bird}</li>
                </ul>
            </div>
        </div>
    );
}


export default IdCard;