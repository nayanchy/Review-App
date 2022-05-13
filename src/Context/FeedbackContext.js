import { nanoid } from "nanoid";
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedBack, setFeedBack] = useState([
        {
            id: nanoid(),
            rating: 10,
            text: 'This item is passed via context'
        },
        {
            id: nanoid(),
            rating: 9,
            text: 'This item is passed via context API'
        },
        {
            id: nanoid(),
            rating: 10,
            text: 'This item is passed via Context API'
        }
    ])

    const [editReview, setEditReview] = useState({
        item: {},
        edit: false
    })

    const deleteItem = (id) => {
        if(window.confirm('Do you really want to delete the feedback?')){
          const newArr = feedBack.filter(item => item.id !== id)
          setFeedBack(newArr)
        }
    }

    function reviewDataHandler(data){
        setFeedBack(prevData => {
            return [data, ...prevData]
        })
    }

    const editFeedback = (id) =>{
        const editTarget = feedBack.find(item => item.id === id)
        setEditReview({
            item: editTarget,
            edit: true
        })
    }

    const updateReview = (id, updatedReview) =>{
        setFeedBack(prev => prev.map(item => item.id === id ? {...item, ...updatedReview} : item))
        setEditReview({
            item: {},
            edit:false
        })
    }

    
    return (
        <FeedbackContext.Provider value={
            {
                feedBack: feedBack,
                deleteItem: deleteItem,
                onSaveData: reviewDataHandler,
                editFeedback: editFeedback,
                editReview: editReview,
                updateReview: updateReview
            }
        }>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext