import Table from 'react-bootstrap/Table';
const MessageBoardTable = ({messages}) => {


    return (

    <Table striped bordered hover>
        <thead>
        <tr>
            <th> # </th>    
            <th> Name </th>    
            <th> Message</th>    
        </tr>
        </thead>
        <tbody>
        {messages.map((message, index) => 
                <MessageInfo key={message.id} {...message} msgNum={index +1}/>
            //the msgNum takes that index that we grab from each iteration and makes a new prop from it 
            )}
        </tbody>
    </Table>
    )
}


const MessageInfo = ({id, name, msgText, msgNum}) => {
    return (
        <tr> 
            <td> {msgNum}</td>    
            <td> {name}</td>    
            <td> {msgText}</td>    
        </tr>
        )
}


export default MessageBoardTable;