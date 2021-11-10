import info from "../IdCard/IdCard.json"
import IdCard from "../IdCard/IdCard"

function Informaction () {
    return ( <div>
        {info.map((currentElement) => <div>
            <IdCard 
                picture={currentElement.picture} 
                firstName={currentElement.firstName} 
                lastName={currentElement.lastName} 
                gender={currentElement.gender} 
                height={currentElement.height} 
                bird={currentElement.bird}    
                />
        </div>)}
        </div>

    );
}

export default Informaction;