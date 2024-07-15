// "use client";
// import React from "react";
// import { useState, useEffect } from "react";

// export interface CommentProps {
//   id: number;
//   auther: {
//     id: number;
//     name: string;
//     img: string;
//   };
//   content: string;
//   timeStamp: string;
// }

// export interface CommentListProps {
//   data: CommentProps[] | null;
// }

// export default function CommentList(props: CommentProps | null) {
//   const [data, setData] = useState<CommentProps[]>([]);

//   useEffect(() => {
//     setData(props?.data || []);
//     console.log(props);
//   }, [props]);

//   if (!props) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map((comment: any) => (
//         <div key={comment.id}>
//           <p>{comment.content}</p>
//           <p>{comment.auther.name}</p>
//           <p>{comment.timeStamp}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
