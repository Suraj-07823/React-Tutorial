import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carddemo() {
  return (

    <div className='image' style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center', 'gap':'10px', 'margin':'20px'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/image.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="src/assets/image copy.png" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/image copy 2.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  );
}

export default Carddemo;