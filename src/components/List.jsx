import React from "react";

const List =(props)=>{

    return(<li onClick={()=>{
                            return(props.func(props.id));
                        }} >
               {props.item}
            </li>);
}

export default List;