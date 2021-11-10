
 function Random(props) {
    //  let min = {props.min};
    //  let max = {props.max};
     let random = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
     return (
         <div>
             <p>Random value between {props.min} and {props.max} => {random}</p>
         </div>
     );
 }

 export default Random;