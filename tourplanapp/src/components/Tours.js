import Card from './Card'
import React from 'react';

const Tours=(props)=>{
const {tours,removeTour}=props

    return (
        <div className='container'>
            <div>
                <h2 className='title'>PLAN WITH LOVE</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return(
                            <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        )
                    })
                }
            </div>
        </div>

    );
 }
export default Tours;
