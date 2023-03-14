import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const articleElements = posts.map((post) => {
        //<Article key={post.id} {...post}/>  is the same thing as writing it all out like below
        return <Article key={post.id} title={post.title} preview={post.preview} date={post.date} minutes={post.minutes}/>
    })
    return (
        <main>
            {articleElements}
        </main>
    );
}

export default ArticleList;