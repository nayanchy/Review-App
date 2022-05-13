import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import React from 'react'
import Card from './shared/Card'

function FeedbackItem({rating, text, id}) {
    const {deleteItem} = useContext(FeedbackContext)
    const {editFeedback} = useContext(FeedbackContext)
    const closeHandler = function(){
        deleteItem(id)
    }
    const editHandler = () =>{
        editFeedback(id)
        
    }

    return (
        <Card reverse={true}>
            <div className="num-display">{rating}</div>
            <button onClick = {closeHandler} className='close' id={id}><FaTimes color={'#fff'} /></button>
            <button onClick = {editHandler} className='edit' id={id}><FaEdit color={'#fff'} /></button>
            <div className="text-display">{text}</div>
        </Card>
    )
}

export default FeedbackItem