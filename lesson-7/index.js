import Express from 'express';

const app = Express();
const port = 1111;


// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.listen(port, () => console.log(`listening on http://localhost:${port}`))

const users = [
    {name: 'gev', age: 22},
    {name: 'geav', age: 12},
]

let id = 0;

const mid = (req, res, next) => {
    console.log(req.query);
    console.log(req.params);
    next();
}

app.get(`/users/:${id}`, mid, (req, res) => {
    // console.log(req.query);
    // console.log(req.params);
    if (id === 1) {
        res.json(users[0])
    } else if(id === 2) {
        res.json(users[1])
    }else {
        res.json('hello')
    }
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`))