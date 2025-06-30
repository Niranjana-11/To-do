const Card=({props,onDelete}) => {
    return(
         <>
         {/* Card here */}
        <div className='card' key={props.id}>
          <p>{props.text}</p>
          <button onClick={(event)=>{event.preventDefault();
            onDelete(props.id);
          }}>Completed</button>
        </div>
        </>
    )
}
export default Card;