import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contactsStore.contacts;
export const selectorFilter = state => state.contactsStore.filter;
export const selectorLoading = state => state.contactsStore.isLoading;
export const selectorError = state => state.contactsStore.error;

export const selectShowContacts = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
