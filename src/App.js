import React, {useState} from 'react';
import Adduser from './Components/Users/Adduser';
import Userlist from './Components/Users/Userlist';

function App() {
  const [userList, setUserList] = useState([]);

  const adduserHandler = (username,userage) => {
    setUserList((prevUserlist) => {
      return [...prevUserlist, {name: username, age: userage , id: Math.random().toString()}];
    });
  }
  return (
    <div>
        <Adduser onAdduser={adduserHandler}/>
        <Userlist users ={userList}/>
    </div>
  );
}

export default App;
