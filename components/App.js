import MessageBoardTable from "./MessageBoardTable";
import NewMessageForm from "./NewMessageForm";
import {useState} from 'react';

const App = () => {
    const messagesArray = [
        { id: 0, name: 'Bill', msgText: 'Hi All!' },
        { id: 1, name: 'Ann', msgText: 'ICS 211 is fun!' },
        { id: 2, name: 'Johnny', msgText: `I'm stranded!` },
        { id: 3, name: 'Barb', msgText: 'Hi' },
        { id: 4, name: 'Frank', msgText: `Who's tired?` },
        { id: 5, name: 'Sarah', msgText: 'I Heart React' },
    ];
    const [messages, setMessages] = useState(messagesArray);

    


    const addNewMessage = values => {
        console.log(values);
        values.id = messages.length;
        // here we are making an array with the new values that we got from the form,
        // and then we are adding in all of the messages array. Since we can see that 
        // messages starts as the messagesArray and then messages becomes the array, so we 
        // will always keep the rest of the info. 
        setMessages([values, ...messages]);
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