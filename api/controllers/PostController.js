module.exports = {
    posts: function (req, res) {
        const post1 = {id: 1, 
            title: 'POST TITLE 1', 
            body: 'This is my body'}

        const post2 = {id: 2, 
            title: 'TITLE 1', 
            body: 'body body body'}
        res.send([post1, post2])
    }
}