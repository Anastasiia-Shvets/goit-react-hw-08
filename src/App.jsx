import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContacts, selectError, selectIsLoading } from "./redux/selectors";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactsForm/ContactsForm";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p className="text">Loading...</p>}
      {error && <p className="text">Something went wrong...</p>}
      {contacts.length && <ContactList />}
    </div>
  );
}

export default App;