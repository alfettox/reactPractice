import React from "react"
import PostComments from "./PostComments"
import PostContent from "./PostContent"
import postData from "../postData"
import {nanoid} from "nanoid"

export default function DebatePost() {
    
    const DEFAULT_FORM_DATA = {
          id: nanoid(),
          userName: "",
          isAnonymous: false,
          commentText:""
        }
    
    const [comments, setComments] = React.useState([...postData.comments])
    const [formData, setFormData] = React.useState(DEFAULT_FORM_DATA)
    
    function handleChange(event) {
        setFormData(currentData => ({...currentData, 
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value}))
    }
            
    function handleSubmit(event) {
        event.preventDefault()
        postData.comments.push(formData)
        setComments([...postData.comments])
        setFormData(DEFAULT_FORM_DATA)
    }

    return (
        <div className="post-container">
            <PostContent data={{...postData}} />
            <PostComments data={comments} />
            <form onSubmit={handleSubmit}>
                <input
                    className="text-input"
                    name="userName"
                    type="text"
                    placeholder="Enter username."
                    onChange={handleChange}
                    value={formData.userName}
                    required
                />
                <textarea
                    name="commentText"
                    placeholder="What do you think?"
                    onChange={handleChange}
                    value={formData.commentText}
                    required
                />
                <label>
                    <input 
                        className="checkbox"
                        name="isAnonymous"
                        type="checkbox"
                        checked={formData.isAnonymous}
                        onChange={handleChange}
                    />
                    Post anonymously?
                </label>
                <button>Send</button>
            </form>
        </div>
    )
}