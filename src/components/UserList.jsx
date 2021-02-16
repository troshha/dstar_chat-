import React from 'react'
import { User } from './User';
import {useParams} from "react-router-dom";


import searchSvg from '../assets/search.svg'
import dotsSvg from '../assets/dots.svg'

const UserList = ({ getUsers }) => {
    const { roomName } = useParams();
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
 
   React.useEffect(() => {
    getUsers(roomName).then((data) => { 
      console.log(data);
     setUsers(data);
    setIsLoading(false);  
    }
    );
   }, [roomName])

  
   

    return (
        <div className="userlist-wrapper">
            <div className="userlist-head">
                <img src={searchSvg} alt=""/>
                <img src={dotsSvg} alt=""/>
            </div>
            <div className="user-list">
            {isLoading ? <div className="lds-dual-ring"></div> : users.map((user,i) => <User key={i} userName={user.name} userImg={user.img} userMsg={user.messages} userId={user._id} userDate={user.createdAt} />)}
            </div>
            
        </div>
    )
}

export default UserList
