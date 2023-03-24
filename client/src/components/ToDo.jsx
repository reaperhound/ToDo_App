import {BiAbacus, BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = (props, deleteToDo) => {
  return (
    <div className="todo flex w-[600px] p-3 justify-between ">
      <div className="text-lg ">
        {props.text}
      </div>
      <div className="icons flex">
        <AiFillDelete size={23} onClick={() => props.deleteToDo(props._id, props.setTodo)} />
      </div>
    </div>
  )
}

export default ToDo