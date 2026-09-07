import { useFeedbackStore } from "../store";
const Buttons = () => {
  const { incrGood, incrNeutral, incrBad } = useFeedbackStore().actions;
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={incrGood}>good</button>
      <button onClick={incrNeutral}>neutral</button>
      <button onClick={incrBad}>bad</button>
    </div>
  );
};

export default Buttons;
