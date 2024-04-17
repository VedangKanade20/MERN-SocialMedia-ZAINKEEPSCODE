import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Notifications.css";

const Notifications = () => {
  const notifyFriendRequest = () => {
    toast.success("New friend request!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyClassName: "toast-body",
    });
  };

  const notifyMessage = () => {
    toast.info("You have a new notification!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyClassName: "toast-body",
    });
  };

  const notifyError = () => {
    toast.error("Error: Something went wrong!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyClassName: "toast-body",
    });
  };

  const notifyCustom = () => {
    toast.dark("Your Account has been Created", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyClassName: "toast-body",
    });
  };

  return (
    <div>
      <button onClick={notifyFriendRequest}>New Friend Request</button>
      <button onClick={notifyMessage}>New Message</button>
      <button onClick={notifyError}>Error</button>
      <button onClick={notifyCustom}>Account Creation </button>
      <ToastContainer />
    </div>
  );
};

export default Notifications;
