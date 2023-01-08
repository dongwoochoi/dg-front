import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dealposter(props){
    return(
        <div className='card_post'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
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