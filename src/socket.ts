import { io } from "socket.io-client";

const socket =
  io(
    "https://ai-support-crm.onrender.com"
  );

export default socket;