// loadMarkdown.js

import React, { useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';

import '../styles/styles.css';

function loadMarkdown() {
    const file_name = 'pagination.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./docs/markdown/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
}

export default loadMarkdown;