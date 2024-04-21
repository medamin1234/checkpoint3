import Card from "react-bootstrap/Card";

const Characteristics = ({ items }) => {
  return (
    // card components

    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={items.image}
          style={{ width: 290, height: 150 }}
        />
        <Card.Body>
          <Card.Title>{items.name}</Card.Title>
          <Card.Text>{items.price}</Card.Text>
          <Card.Text>{items.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Characteristics;
