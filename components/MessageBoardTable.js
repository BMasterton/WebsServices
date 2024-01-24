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
        {messages.map(message => 
                <MessageInfo key={message.id} {...message}/>
            
            )}
        </tbody>
    </Table>
    )
}


const MessageInfo = ({id, name, msgText}) => {
    return (
        <tr> 
            <td> {id + 1}</td>    
            <td> {name}</td>    
            <td> {msgText}</td>    
        </tr>
        )
}


export default MessageBoardTable;