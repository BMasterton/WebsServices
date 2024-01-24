const MessageBoardTable = () => {
    const { Table } = ReactBootstrap;
    const messages = [
        { id: 0, name: 'Bill', msgText: 'Hi All!' },
        { id: 1, name: 'Ann', msgText: 'ICS 211 is fun!' },
        { id: 2, name: 'Johnny', msgText: `I'm stranded!` },
        { id: 3, name: 'Barb', msgText: 'Hi' },
        { id: 4, name: 'Frank', msgText: `Who's tired?` },
        { id: 5, name: 'Sarah', msgText: 'I Heart React' },
    ];


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