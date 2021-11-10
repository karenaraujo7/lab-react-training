import aleatorio from "./Random.json"
import Random from "./Random"

function RandomFunc() {
    return (
        <div> 
            {aleatorio.map((currentNumber) => <div> 
                <Random min={currentNumber.min} max={currentNumber.max}/>
            </div>)}
        </div>
    )
}

export default RandomFunc;