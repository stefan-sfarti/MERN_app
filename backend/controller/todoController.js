const getTodo = (req, res) => {
    res.json({message: 'Get todo'})
}

const setTodo = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.json({message: 'Set todo'})
}

const updateTodo = (req, res) => {
    res.json({message: `Update todo ${req.params.id}`})
}

const deleteTodo = (req, res) => {
    res.json({message: `Delete todo ${req.params.id}`})
}

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}