import React from 'react'
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackStats() {
    const {feedBack} = useContext(FeedbackContext)
    function calcAvg (){
        let total = 0
        feedBack.forEach(element => {
            total += element.rating
        });
        
        return total/feedBack.length
    }
    

    return (
        <>
        {(feedBack.length !== 0) && <div className='feedback-stats'>
            <h4>{`${feedBack.length} ${feedBack.length <= 1 ? 'feedback' : 'feedbacks'}`}</h4>
            <h4>Average Rating:{calcAvg().toFixed(2)}</h4>
        </div>}
        
        </>
        
    )
}

export default FeedbackStats