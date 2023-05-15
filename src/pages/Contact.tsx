import React, { useState } from "react";
import { AddContactModal } from "../components";
import { VscEdit } from "react-icons/vsc";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { deleteContactReducer } from "../Redux/features/contactSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ContactData } from "../type/types";

const Contact = () => {
  const { contactsList } = useSelector((state: any) => state.contact);
  const [contactData, setContactData] = useState({} as ContactData);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const editData = (id: any) => {
    setIsEdit(true);
    setShowModal(!showModal);
    setContactData(contactsList.find((s: any) => s.id === id));
  };

  const deleteData = (id: any) => {
    dispatch(deleteContactReducer(id));
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="my-10 w-full flex justify-center">
          <AddContactModal
            showModal={showModal}
            setShowModal={setShowModal}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            contactData={contactData}
            setContactData={setContactData}
          />
        </div>
        {contactsList?.length ? (
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 p-6">
            {contactsList?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white flex justify-between">
                      {item.firstName} {item.lastName}
                      <VscEdit
                        onClick={() => editData(item.id)}
                        className="cursor-pointer"
                      />
                    </h3>
                    <p
                      className={`mt-2 text-gray-800 dark:text-gray-400 ${
                        item.status === "active"
                          ? "text-green-700"
                          : "text-red-500"
                      }`}
                    >
                      {item.status}
                    </p>
                    <div className="flex justify-end items-center mt-4">
                      <button
                        onClick={() => deleteData(item.id)}
                        type="button"
                        className="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-4 mt-5">
            <div
              className="bg-white border rounded-md shadow-lg p-4 dark:bg-gray-800 dark:border-gray-700"
              role="alert"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-4 w-4 text-blue-500 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-800 font-semibold dark:text-white">
                    No Contact Found
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                    Please add a contact through "Create Contact" button.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
