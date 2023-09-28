import { useState } from "react";


const Card = ({ id, image, info, price, name, removeTour }) => {

    const [readmore, setReadmore] = useState(false);  //hook for readmore
    const description = readmore ? info: `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    const redirectHandle = (name) => {

        window.location.href = `https://holidayz.makemytrip.com/holidays/international/search?dest=${name}&redirectionPage=grouping`;
    };

    return (

        <div  className="Card" key={id}>
            <img src={image} alt="photo" className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <div className="button">
            <button className='btn-green' onClick={() => redirectHandle(name)}>Intrested</button>
            <button className='btn-red' onClick={() => removeTour(id)}>Not Intrested</button>
           </div>
        </div> 
    )

};
export default Card;