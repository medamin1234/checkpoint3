import { useState } from "react";
const MyFunctionComponent = () => {
  const names = ["amine", "kasem", "rjab", "mohsen"];
  const [name, setName] = useState(0);
  const ChangeName = () => {
    if (name < 3) return setName((prv) => prv + 1);
    setName(0);
  };
  return (
    <div>
      <p>hello my name is {names[name]}</p>
      <button onClick={ChangeName}>click me</button>
    </div>
  );
};
export default MyFunctionComponent;
