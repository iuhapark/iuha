// 'use client';

// import { useParams } from "next/navigation";
// import ProtectedRoute from "@/components/auth/protected-route";
// import RoomList from "@/components/chat/room-list";
// import Room from "@/components/chat/room";
// import { useState } from "react";

// export default function ChatRoomPage() {
//   const { id } = useParams<{ id: string }>();
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <ProtectedRoute>
//       <div className='chat-page'>
//         <div className='z-10 absolute md:static w-full max-w-[240px] h-full'>
//           <RoomList onClose={() => setIsOpen(false)} />
//         </div>

//         <div className='content-wrapper'>
//           <Room
//             id={id}
//             isOpen={isOpen}
//             onOpen={() => setIsOpen(true)}
//           />
//         </div>
//       </div>
//     </ProtectedRoute>
//   );
// }