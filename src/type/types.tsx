// AddContactModal Component Types Start
export interface ContactData {
  id?: string;
  firstName?: string;
  lastName?: string;
  status?: string;
  contactsList?: [];
}

export interface HandleDataVariables {
  name?: string;
  value?: string;
}
// AddContactModal Component Types End

// ContactSlice file Types Start
export interface ContactSliceState {
  firstName?: string;
  lastName?: string;
  status?: string;
  contactsList?: [];
}
// ContactSlice file Types End
