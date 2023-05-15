import React, { useState } from "react";
import { HandleDataVariables } from "../type/types";
import { useDispatch } from "react-redux/es/exports";
import {
  createContactReducer,
  editContactReducer,
} from "../Redux/features/contactSlice";

const AddContactModal = ({
  showModal,
  setShowModal,
  isEdit,
  setIsEdit,
  contactData,
  setContactData,
}: any) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: HandleDataVariables = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const setData = () => {
    if (!contactData?.firstName) setError("First name is required.");
    else if (!contactData?.lastName) setError("Last name is required.");
    else if (!contactData?.status) setError("Status is required.");
    else {
      setError("");
      setShowModal(!showModal);
      dispatch(
        !isEdit
          ? createContactReducer(contactData as any)
          : editContactReducer(contactData as any)
      );
      setIsEdit(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setShowModal(!showModal);
          setContactData({});
        }}
        type="button"
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        data-hs-overlay="#hs-vertically-centered-modal"
      >
        Create Contact
      </button>

      <div
        id="hs-vertically-centered-modal"
        className={`hs-overlay bg-gray-500/50 w-full h-full fixed top-0 left-0 z-[50] overflow-x-hidden overflow-y-auto ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-1 ease-out transition-all sm:max-w-lg sm:w-full sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center w-full">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] w-full mx-4">
            <div className="flex justify-between items-center py-3 px-4 dark:border-gray-700">
              <p className="text-red-500 font-semibold">{error ? error : ""}</p>
              <button
                onClick={() => {
                  setShowModal(!showModal);
                  setIsEdit(false);
                }}
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                FirstName :
              </label>
              <input
                onChange={(e) => handleData(e)}
                type="email"
                id="input-label"
                name="firstName"
                value={contactData?.firstName ? contactData?.firstName : ""}
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="John"
              />
            </div>
            <div className="p-4 overflow-y-auto">
              <label
                htmlFor="input-label"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Last Name :
              </label>
              <input
                onChange={(e) => handleData(e)}
                type="email"
                id="input-label"
                name="lastName"
                value={contactData?.lastName ? contactData?.lastName : ""}
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Doe"
              />
            </div>
            <div className="flex items-center ml-4">
              <p className="block font-medium dark:text-white">Status</p>
              <div className="grid space-y-3 ml-4 mt-2">
                <div className="relative flex items-center">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      onChange={(e) => handleData(e)}
                      id="active"
                      name="status"
                      value="active"
                      type="radio"
                      className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      aria-describedby="hs-radio-delete-description"
                      checked={contactData.status === "active" ? true : false}
                    />
                  </div>
                  <label htmlFor="active" className="ml-3">
                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                      Active
                    </span>
                  </label>
                </div>

                <div className="relative flex items-center">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      onChange={(e) => handleData(e)}
                      id="inactive"
                      name="status"
                      value="inactive"
                      type="radio"
                      className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      aria-describedby="hs-radio-archive-description"
                      checked={contactData.status === "inactive" ? true : false}
                    />
                  </div>
                  <label htmlFor="inactive" className="ml-3">
                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                      Inactive
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 dark:border-gray-700">
              <button
                onClick={() => {
                  setShowModal(!showModal);
                  setIsEdit(false);
                }}
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                Close
              </button>
              <button
                onClick={() => setData()}
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContactModal;
