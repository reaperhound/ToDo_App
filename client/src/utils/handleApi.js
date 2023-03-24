import axios from "axios"

const BaseURL = "http://localhost:3000/"

const getAllToDo = (setToDo) => {
  axios
  .get(BaseURL)
  .then((data) => {
    console.log(`data ----> ${data}`);
    setToDo(data.data)
  })
}

const addToDo = (text, setText, setToDo) => {
  axios
  .post(BaseURL, {text: text})
  .then(data => {
    console.log(data);
    setText("") // emptying the text variable
    getAllToDo(setToDo) // refreshing the list by calling getToDo again
})
}

const deleteToDo = (_id, setToDo) => {
  axios
  .delete(BaseURL, {
    _id: _id
  })
  .then(
    data => {
      console.log(data);
      getAllToDo(setToDo)
    }
  )
  .catch(err => console.log(err))
}


export {getAllToDo, addToDo, deleteToDo}