export const ContactList = ({ options, onDelete }) => {
  return (
    <div>
      <ul>
        {options.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
