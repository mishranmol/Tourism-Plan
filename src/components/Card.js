// we can also write props down instead of writing id,name,info etc
import { useState } from 'react';
function Card({ id, image, info, price, name , removeTour}) {

    const [readmore, setReadmore] = useState(false);

    // the main thing here is the dollar sign 
    const description = readmore ? info:`${info.substring(0,200)}...`


    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (


        <div className="card">

            <img src={image} className="image"></img>

            <div className='tour-info'>

                <div className="tour-details">
                    <h4 className="tour-price">${price}</h4>
                    <h4 className="tour-name">{name}</h4>

                    <div className="description">
                        {description}
                        <span onClick={readmoreHandler} className='read-more'>
                            {readmore ? `ShowLess` : `ReadMore`}
                        </span>
                    </div>

                </div>


            </div>

            <button onClick={ () => removeTour(id)} className='btn-red'>
                Not Interested
            </button>
        </div>


    );

}

export default Card;