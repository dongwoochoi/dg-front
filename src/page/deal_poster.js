import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dealposter(props){

    let url = 'http://20.196.193.2:8080/'+ props.post_data.img

    return(
        <div className='card_post'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>{props.post_data.title}</Card.Title>
                    <Card.Text>

                        {props.post_data.content}<br/>
                        {props.post_data.location}


                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dealposter;