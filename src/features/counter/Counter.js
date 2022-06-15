import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../styled/container";
import { Button } from "../../styled/Button";
import { Row } from "../../styled/Row";
import { InputText } from "../../styled/InputText";
import { increment, decrement, reset, addAmount } from "./counterSlice";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <Container>
      Counter
      <p>{count}</p>
      <Row>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button
          onClick={() => {
            dispatch(reset());
            setAmount(0);
          }}
        >
          Reset
        </Button>
      </Row>
      <InputText type="text" value={amount} onChange={(e) => setAmount(e.target.value * 1)} />
      <Button onClick={() => dispatch(addAmount(amount))}>Add</Button>
    </Container>
  );
}

export default Counter;
