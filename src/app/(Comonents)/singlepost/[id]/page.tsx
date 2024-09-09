'use client'

import PostDetails from "@/app/_components/Post/postDetails";
import Loading from "@/app/loading";
import { getPost } from "@/redux/postSlice";
import { storeDispatch, storeState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Singlepost({ params: { id } }: { params: { id: string } }) {
  const { isLoading, post } = useSelector((state: storeState) => state.postsReducer);
  const dispatch = useDispatch<storeDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <main style={{ maxWidth: '50%', margin: '0 auto' }}>
        {isLoading ? (
          <Loading />
        ) : post && 
          <PostDetails postDet={post} isComment={true} />
         }
      </main>
    </>
  );
}
