import Items from "./product.js";
import name from "./name.json";

const app = () => {
  const firstName = name.firstName;

  return (
    <>
      <Items />

      {firstName ? (
        <div style={{ color: "blue" }}>
          Hello ,{firstName}!
          <img
            src="https://media.tenor.com/k7QJGt6WChYAAAAM/emmanuel-jdz.gif"
            style={{ width: 50, height: 50 }}
          ></img>
        </div>
      ) : (
        <div style={{ color: "red" }}>Hello, there!</div>
      )}
    </>
  );
};
export default app;
