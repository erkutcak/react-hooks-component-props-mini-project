import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const articleElements = posts.map((posts) => {
        return <Article key={posts.id} title={posts.title} preview={posts.preview}/>
    })
    return (
        <main>
            {articleElements}
        </main>
    );
}

export default ArticleList;