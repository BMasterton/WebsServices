import MessageBoardTable from "./MessageBoardTable";
import NewMessageForm from "./NewMessageForm";
import LoginForm from "./LoginForm";
import {useState} from 'react';
import axios from "axios";

const App = ({jsonData}) => {
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
            let data = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/v1/login`, values);
            if (data){
                setAuthentication(true);
                setMessages([data.data, ...messages]);
                sessionStorage.setItem('token', data.data.token);
                console.log("tokenInLogin", sessionStorage.getItem('token'))


            }
        } catch (err) {
            console.log(err);
        }
        // TODO: change the state of the boolean state hook to true (call the set function)
        }


    const addNewMessage = async values => {
        //console.log(values);\
        console.log("tokeninMessage", sessionStorage.getItem('token'))
        //values.id = messages.length;
        // configuration for axios, use bearer token auth
        const axiosReqConfig = {
            url: `${process.env.NEXT_PUBLIC_HOST}/v1/messages`,
            method: 'post',
            headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            data: values
            }

        try {
            const { data } = await axios(axiosReqConfig);
            console.log("addNewMessageAxiosCall",data);
            //let data = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/v1/messages`, values);
            console.log(data);
            if (data){
                setMessages([data.data, ...messages]);

            }
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
            {authentication == true ? <NewMessageForm addNewMessage={addNewMessage}/> : <LoginForm logInUser={logInUser}/>}
            <MessageBoardTable messages={messages}/>
            
        </>



    )
}

export default App;