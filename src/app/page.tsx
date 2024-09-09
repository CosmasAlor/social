// 'use client'

// import styles from "./page.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { storeDispatch, storeState } from "@/redux/store";
// import { useEffect } from "react";
// import { getPosts } from "@/redux/postSlice";
// import Loading from "./loading";
// import { Paper } from "@mui/material";
// import PostDetails from "./_components/Post/postDetails";
// import { Post } from "@/app/interfaces"; // Import the Post interface

// export default function Home() {

//   // Use the properly typed dispatch and selector
//   const dispatch = useDispatch<storeDispatch>();
//   const { isLoading, posts } = useSelector((state: storeState) => state.postsReducer);

//   // Fetch posts on component mount
//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   return (
//     <>
//       <main className={styles.main} style={{maxWidth: '50%', margin: '0 auto'}}>
//         {isLoading ? (
//           <Loading />
//         ) : (
//           <div style={{ display: 'flex', flexDirection : 'column' , justifyContent: 'center' }}>
//             {posts?.map((post: Post) => (
//               <PostDetails key={post._id} postDet={post} />  // Pass post as a prop
//             ))}
//           </div>
//         )}
//       </main>
      
//     </>
//   );
// }



'use client'; 

import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { storeDispatch, storeState } from "@/redux/store";
import { useEffect } from "react";
import { getPosts } from "@/redux/postSlice";
import Loading from "./loading";
import { Paper } from "@mui/material";
import PostDetails from "./_components/Post/postDetails";
import { Post } from "@/app/interfaces"; // Import the Post interface

export default function Home() {

  // Use the properly typed dispatch and selector
  const dispatch = useDispatch<storeDispatch>();
  const { isLoading, posts } = useSelector((state: storeState) => state.postsReducer);

  // Fetch posts on component mount
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <main className={styles.main} style={{maxWidth: '50%', margin: '0 auto'}}>
        {isLoading ? (
          <Loading />
        ) : (
          <div style={{ display: 'flex', flexDirection : 'column' , justifyContent: 'center' }}>
            {posts?.map((post: Post) => (
              <PostDetails key={post._id} postDet={post} />  // Pass post as a prop
            ))}
          </div>
        )}
      </main>
    </>
  );
}

