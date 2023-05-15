import { createSlice } from "@reduxjs/toolkit";
import { ContactSliceState } from "../../type/types";
import { v4 as uuid } from "uuid";

const initialState: ContactSliceState = {
  contactsList: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    createContactReducer: (state: any, action: any) => {
      const uniqueId = uuid();
      state?.contactsList?.push({ ...action?.payload, id: uniqueId });
    },
    editContactReducer: (state: any, action: any) => {
      const uniqueId = uuid();
      const update = state?.contactsList?.map((s: any) => {
        if (s.id === action.payload.id)
          return {
            ...action.payload,
            id: uniqueId,
          };
        else return s;
      });

      state.contactsList = update;
    },
    deleteContactReducer: (state: any, action: any) => {
      const update = state?.contactsList?.filter(
        (s: any) => s.id !== action.payload
      );

      state.contactsList = update;
    },
  },
});

export const {
  createContactReducer,
  editContactReducer,
  deleteContactReducer,
} = contactSlice.actions;
export default contactSlice.reducer;
