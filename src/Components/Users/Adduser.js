import React , {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Adduser.module.css';
import Errormodal from '../UI/Errormodal';

const Adduser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
        {
            setError(
                {
                    title: 'Invalid Input',
                    message: 'Please enter a non empty value for name and age'
                }
            )
            return;
        }
        if(+enteredAge < 1)
        {
            setError(
                {
                    title: 'Invalid Age',
                    message: 'Please enter an age > 0'
                }
            )
            return;
        }
        props.onAdduser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) =>
    {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }
    return(
        <div>
            {error && <Errormodal title={error.title} message={error.message} afterDisplay = {errorHandler}/>}
            <Card className = {classes.input}>
                <form onSubmit={addUserHandler}>  
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value = {enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    );
};

export default Adduser;