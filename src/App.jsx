import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}
      <Counter>
        <Counter.Label>My Super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Count />
      </Counter>

      <div>
        <Counter>
          <Counter.Decrease icon="◀️" />
          <div>
            <Counter.Count />
          </div>
          <Counter.Increase icon="▶️" />
        </Counter>
      </div>
    </div>
  );
}
