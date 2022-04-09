import "./ExpensesFilter.scss";

const ExpensesFilter = ({ setSelectedValue }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filter by Year</label>
        <select onChange={(e) => setSelectedValue(e.target.value)}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
