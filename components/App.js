import MessageBoardTable from "./MessageBoardTable";
import NewMessageForm from "./NewMessageForm";
import LoginForm from "./LoginForm";
import {useState, useRef} from 'react';
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const App = ({jsonData}) => {

    const usernameRef = useRef(null);

    const messagesArray = [
        { id: 0, name: 'Bill', msgText: 'Hi All!' },
        { id: 1, name: 'Ann', msgText: 'ICS 211 is fun!' },
        { id: 2, name: 'Johnny', msgText: `I'm stranded!` },
        { id: 3, name: 'Barb', msgText: 'Hi' },
        { id: 4, name: 'Frank', msgText: `Who's tired?` },
        { id: 5, name: 'Sarah', msgText: 'I Heart React' },
    ];
    const [messages, setMessages] = useState(jsonData);
    const [authentication, setAuthentication] = useState(false);

    const logInUser = async values => {
        console.log(values);
        try {
            const data = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/v1/login`, values);
            if (data){
                sessionStorage.setItem('token', data.data.token);
                const decodedToken = jwtDecode(data.data.token);
                usernameRef.current = decodedToken.username;
                setAuthentication(true);
                
               


            }
        } catch (err) {
            console.log(err);
        }
        // TODO: change the state of the boolean state hook to true (call the set function)
        }


    const addNewMessage = async values => {
        console.log("tokeninMessage", sessionStorage.getItem('token'))
        // configuration for axios, use bearer token auth
        values.name = usernameRef.current;

        const axiosReqConfig = {
            url: `${process.env.NEXT_PUBLIC_HOST}/v1/messages`,
            method: 'post',
            headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            data: values
            }

        try {
            const { data } = await axios(axiosReqConfig);
            setMessages([data, ...messages]);

            console.log("addNewMessageAxiosCall",data);
            console.log(data);
           
        } catch (err) {
            console.log(err);
        }
        // here we are making an array with the new values that we got from the form,
        // and then we are adding in all of the messages array. Since we can see that 
        // messages starts as the messagesArray and then messages becomes the array, so we 
        // will always keep the rest of the info. 
        // messages.unshift(values);
        //console.log(messages);

    }

    return (
        <>
            {authentication == true ? (<NewMessageForm addNewMessage={addNewMessage}/>) : (<LoginForm logInUser={logInUser}/>)}
            <MessageBoardTable messages={messages}/>
            
        </>



    )
}

export default App;