import { useAnecdotes, useFilter } from "../store";

const Filter = () => {
  const filter = useFilter();
  const actions = useAnecdotes().actions;
  const handleChange = (event) => {
    actions.applyFilter(event.target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input data-testid="filter" onChange={handleChange} value={filter} />
    </div>
  );
};

export default Filter;
