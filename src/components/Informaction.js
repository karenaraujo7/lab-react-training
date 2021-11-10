import info from "./IdCard.json"
import IdCard from "./IdCard"

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