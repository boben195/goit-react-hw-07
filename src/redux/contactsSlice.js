import {  createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false
        state.loading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, state => {
      state.error = true
      state.loading = false
      })
    /****** */ 
      .addCase(addContact.pending, state => {
        state.error = false
        state.loading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, state => {
      state.error = true
      state.loading = false
      })
    /********* */
    .addCase(deleteContact.pending, state => {
        state.error = false
        state.loading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false
        state.items = state.items.filter((contact) => contact.id !== action.payload)
      })
      .addCase(deleteContact.rejected, state => {
      state.error = true
      state.loading = false
      })
  }
});

export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  (state) => state.filters.name,
  (contacts, nameFilter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
  }
)


export const contactsReducer = contactsSlice.reducer;

export const selectContactsLoading = (state) => state.contacts.loading;

export const selectContactsError = (state) => state.contacts.error;