export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find your contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
