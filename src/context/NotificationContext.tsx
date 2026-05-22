import {

  createContext,

  useContext,

  useState,

  ReactNode,

} from "react";


/* =========================
   TYPES
========================= */

export type NotificationType = {

  id: number;

  message: string;

  time: string;

  type?:
    | "success"
    | "error"
    | "info"
    | "warning";

  read: boolean;

};


type ContextType = {

  notifications:
    NotificationType[];

  addNotification: (

    notification: Omit<
      NotificationType,
      "id" | "read"
    >

  ) => void;

  removeNotification: (
    id: number
  ) => void;

  markAsRead: (
    id: number
  ) => void;

  clearNotifications:
    () => void;

};


/* =========================
   CONTEXT
========================= */

const NotificationContext =
  createContext<ContextType | null>(
    null
  );


/* =========================
   PROVIDER
========================= */

export const NotificationProvider = ({

  children,

}: {

  children: ReactNode;

}) => {


  const [notifications,
    setNotifications] =
    useState<
      NotificationType[]
    >([]);


  /* =========================
     ADD NOTIFICATION
  ========================= */

  const addNotification = (

    notification: Omit<
      NotificationType,
      "id" | "read"
    >

  ) => {

    const newNotification = {

      ...notification,

      id: Date.now(),

      read: false,

    };


    setNotifications((prev) => [

      newNotification,

      ...prev,

    ]);

  };


  /* =========================
     REMOVE NOTIFICATION
  ========================= */

  const removeNotification = (
    id: number
  ) => {

    setNotifications((prev) =>

      prev.filter(

        (item) =>
          item.id !== id

      )

    );

  };


  /* =========================
     MARK AS READ
  ========================= */

  const markAsRead = (
    id: number
  ) => {

    setNotifications((prev) =>

      prev.map((item) =>

        item.id === id

          ? {

              ...item,

              read: true,

            }

          : item

      )

    );

  };


  /* =========================
     CLEAR ALL
  ========================= */

  const clearNotifications =
    () => {

      setNotifications([]);

  };


  return (

    <NotificationContext.Provider

      value={{

        notifications,

        addNotification,

        removeNotification,

        markAsRead,

        clearNotifications,

      }}

    >

      {children}

    </NotificationContext.Provider>

  );

};


/* =========================
   CUSTOM HOOK
========================= */

export const useNotification =
  () => {

    const context =
      useContext(
        NotificationContext
      );


    if (!context) {

      throw new Error(

        "useNotification must be used inside NotificationProvider"

      );

    }


    return context;

};