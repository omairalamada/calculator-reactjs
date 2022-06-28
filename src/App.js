import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Keypad";
import CalcProvider from "./context/CalculatorContext";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen/>
       <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button 
            value={btn}
            key={i}
          />
        ))}
       </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
