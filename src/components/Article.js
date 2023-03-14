import React from "react";

function timeInEmojis(minutes) {
    const articleIncrements = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? '☕️' : '🍱'

    let emojiString = ""
    for (let i = 0; i < minutes; i += articleIncrements) {
        emojiString += emoji;
    }

    return emojiString
}

function Article({title, date = "January 1, 1970", preview, minutes}) {
    const minutesToRead = timeInEmojis(minutes)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {minutesToRead} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;