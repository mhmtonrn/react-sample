import Counter from "../counter/Counter";

export const CounterPage = ({time})=>{
  return (
    <>
      <h1>Student Page</h1>
        <hr/>
        <Counter time={time} />

    </>
  );
}