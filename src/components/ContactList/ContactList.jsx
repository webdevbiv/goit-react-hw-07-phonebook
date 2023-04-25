import { deleteContact } from 'redux/contactsSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../ContactList/ContactList.module.scss';
import { selectContacts } from 'redux/selectors';

function ContactList() {
  const distpatch = useDispatch();

  const contacts = useSelector(selectContacts);

  return (
    <ListGroup>
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id} className={s.item}>
          <div>
            {contact.name}: {contact.number}
          </div>
          <Button
            variant="primary"
            type="button"
            onClick={() => distpatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ContactList;
