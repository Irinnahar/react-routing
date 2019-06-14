import React from 'react'
import {Link} from 'react-router-dom';

const User = (props) => {
    return (
        <Link to={'/'+ props.id}>
            <li>
                {props.name} 
            </li>
        </Link>
    )
}
export default User