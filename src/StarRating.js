import React , {useState} from 'react'; 
import "./StarRating.css";


import GradeIcon from '@material-ui/icons/Grade';

function StarRating() {
   const [rate,setRating] = useState(null); 
    return (
       
        <div className="starRating">
            {[...Array(5)].map((star, i) => {
                
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rate"
                            value={ratingValue}
                           onClick={() =>setRating(ratingValue)} 

                        />
                        <GradeIcon />
                    </label>
                         
            );
            })}
        </div>
    )
}

export default StarRating;
