const express = require('express');
const path = require('path');
// require('./db/mongoose');

// const userRouter = require('./routers/user');
// const taskRouter = require('./routers/task');


const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));
// app.use(express.static(path.join(__dirname, '../javascript')));

const port = process.env.PORT || 3000;


// app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);

// frontend routers
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})