const express = require("express");
const app = express();
app.use(express.json());

const posts = [];

app.post("/posts", (req, res) => {
    const post = {
        title: req.body["title"],
        //id: posts.length + 1,
        content: req.body["content"],
        comments: []
    };
    posts.push(post);
    res.status(201).json(post);
});


app.get("/posts", (req,res) => {
    
    
    res.json(formattedPosts);
});

app.get("/posts/:postID/comments", (req, res) => {
    const postID = parseInt(req.params.postID);
    const post = posts.find(p => p.id === postID);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    res.json(post.comments);
});

app.post("/posts/:postID/comments", (req, res) => {
    const postID = parseInt(req.params.postID);
    const post = posts.find(p => p.id === postID);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    const comment = {
        id: post.comments.length + 1,
        text: req.body.text
    };

    post.comments.push(comment);
    res.status(201).json(comment);
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
