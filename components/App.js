import MessageBoardTable from "./MessageBoardTable";
import NewMessageForm from "./NewMessageForm";
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

    


    const addNewMessage = async values => {
        console.log(values);
        //values.id = messages.length;
        try {
            let data = await axios.post('http://10.21.75.134:3004/v1/messages', values);
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
            <NewMessageForm addNewMessage={addNewMessage}/>
            <MessageBoardTable messages={messages}/>
            
        </>



    )
}

export default App;