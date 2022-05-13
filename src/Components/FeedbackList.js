import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList() {
    const {feedBack} = useContext(FeedbackContext)
    let feedbackEl = <p>No Review found</p>
    if(feedBack && feedBack.length > 0 ){
        feedbackEl = feedBack.map(feed => {
            return( 
                <motion.div
                    key = {feed.id}
                    initial = {{opacity:0}}
                    animate = {{opacity:1}}
                    exit = {{opacity:0}}
                >
                    <FeedbackItem rating={feed.rating} text={feed.text} key={feed.id} id={feed.id} />
                </motion.div>
            )
        })
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedbackEl}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList