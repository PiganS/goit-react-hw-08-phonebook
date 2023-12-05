import { Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts.reducer';
import { selectorFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.currentTarget.value;

    dispatch(filterContacts(value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          placeholder="Enter contact name"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
