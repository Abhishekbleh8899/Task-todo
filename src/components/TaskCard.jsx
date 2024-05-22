
import './TaskCard.css'
import Tag from './Tag'
import deleteicon from  '../assets/delete.png'
const   TaskCard = ({title, tags , handleDelete , index , setActiveCard}) => {
  return (
    <article className='task_card'draggable onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)}>
      <p className='task_text'>{title}</p>
      <div className='task_card_bottom_line'>
        <div className="task_card_tags">
        {tags.map((tag , index)=> <Tag key={index} tagName={tag} selected={true}/>  )}
        {/* <Tag tagName="JavaScript" />
        <Tag tagName="React" /> */}


        </div>
        <div className="task_delete" onClick={()=> handleDelete(index)}>
          <img src={deleteicon} className='delete_icon' alt="" />
        </div>
      </div>
    </article>
  )
}

export default TaskCard