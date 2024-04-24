app.get('/portfolio/:title', (req, res) => {
    const projectTitle = req.params.title;
    res.render('project-page', { title: projectTitle });
});
