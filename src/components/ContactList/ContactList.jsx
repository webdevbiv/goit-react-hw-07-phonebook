import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getContactsThunk, deleteContactThunk } from 'redux/thunk';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../ContactList/ContactList.module.scss';

function ContactList() {
  const distpatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    distpatch(getContactsThunk());
  }, [distpatch]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {contacts && (
        <ListGroup>
          {contacts.map(contact => (
            <ListGroup.Item key={contact.id} className={s.item}>
              <div>
                {contact.name}: {contact.phone}
              </div>
              <Button
                variant="primary"
                type="button"
                onClick={() => distpatch(deleteContactThunk(contact.id))}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default ContactList;
