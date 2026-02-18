import { useState, useRef } from "react";
import Card from "./Card";

const InputDemo = () => {
  // Controlled input
  const [controlledValue, setControlledValue] = useState("");

  // Uncontrolled input
  const uncontrolledRef = useRef();

  const showUncontrolled = () => {
    alert(uncontrolledRef.current.value);
  };

  return (
    <>
      <Card>
        <h2 className="text-lg font-semibold mb-2">
          Controlled Input
        </h2>

        <input
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Type something..."
        />

        <p className="mt-2 text-sm">
          Value: {controlledValue}
        </p>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold mb-2">
          Uncontrolled Input
        </h2>

        <input
          type="text"
          ref={uncontrolledRef}
          className="border p-2 w-full rounded"
          placeholder="Type and click button"
        />

        <button
          onClick={showUncontrolled}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show Value
        </button>
      </Card>
    </>
  );
};

export default InputDemo;
