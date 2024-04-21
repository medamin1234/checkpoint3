import Characteristics from "./card";
import product from "./product.json";

const Items = () => {
  return (
    <div style={{ display: "flex" }}>
      {product.map((v, i) => (
        <Characteristics items={v} key={i} />
      ))}
    </div>
  );
};
export default Items;
