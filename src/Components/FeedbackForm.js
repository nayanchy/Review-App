import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Card from './shared/Card'
import { nanoid } from 'nanoid'
import Button from './shared/Button'
import RatingSelector from './RatingSelector'

function FeedbackForm() {
  const {onSaveData} = useContext(FeedbackContext)
  const {editReview, updateReview} = useContext(FeedbackContext)

  useEffect(()=>{
    if(editReview.edit){
      setText(editReview.item.text)
      setIsDisabled(false)
      setReviewRating(editReview.item.rating)
    }
  },[editReview])

  const [text, setText] = useState('')

  const [isDisabled, setIsDisabled] = useState(true)

  const [message, setMessage] = useState('')

  const [reviewRating, setReviewRating] = useState(10)

  function formDataHandler (e){
    if(text === ''){
      setMessage(null)
      setIsDisabled(true)
    }else if(text.trim().length <= 10){
      setMessage('You need to type atleast 10 characters')
      setIsDisabled(true)
    }else{
        setMessage(null)
        setIsDisabled(false)
    }

    setText(e.target.value)
  }

  function resetInputs(){
    setText('')
  }
  
  function getRating(rating){
    setReviewRating(rating)
    return editReview.edit = false
  }

  function submitHandler(e){
    e.preventDefault()
    let savedData = 
    {
      id: nanoid(),
      rating: +reviewRating,
      text: text
    }
    if(editReview.edit === true){
      updateReview(editReview.item.id, savedData)
    }else{
      onSaveData(savedData)
    }
    resetInputs()
    setIsDisabled(true)
  }
  return (
    <Card>
        <form onSubmit={submitHandler}>
            <h2>How would you rate our service?</h2>
            <RatingSelector getRating={getRating}/>
            <div className="input-group">
                <input type="text" name="text" onChange={formDataHandler} value={text} placeholder='Write a review' />
                <Button type='submit' version='secondary' isDisabled={isDisabled}>Save</Button>
            </div>
            {message}
        </form>
    </Card>
  )
}

export default FeedbackForm