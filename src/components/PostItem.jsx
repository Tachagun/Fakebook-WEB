import React from "react";
import Avatar from "./Avatar";
import { CloseIcon, LikeIcon, ThreeDotIcon } from "../icons";
import reactLogo from "../assets/react.svg";
import fakebookLogo from "../assets/fakebook.png";
import { useUserStore } from "../stores/userStore";
import usePostStore from "../stores/postStore";
import TimeAgo from "react-timeago";
import { toast } from "react-toastify";

function PostItem({post}) {
  console.log(post)
  const user = useUserStore(state=>state.user)
  const token = useUserStore(state=>state.token)
  const getAllPosts = usePostStore(state=>state.getAllPosts)
  const deletePost = usePostStore(state=>state.deletePost)
  const setCurrentPost = usePostStore(state=>state.setCurrentPost)
  
  const hdlShowEditModal = () => {
    setCurrentPost(post)
    document.getElementById('editform-modal').showModal()
  }
  const hdlDelete = async ()=> {
    try {
      const resp = await deletePost(post.id)
      toast.success(resp.data.message)
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message
      toast(errMsg)
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl" >
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar imgSrc={post.user.profileImage} className="w-11 rounded-full" />
            <div>
              <p>{post.user.firstName}  {post.user.lastName}</p>
              <p className="text-xs opacity-70">
                <TimeAgo date={post.createdAt} />
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            { post.userId === user.id &&
              <div className="dropdown">
              <div tabIndex={0} role="button">
                <div className="avatar items-center cursor-pointer">
                  <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                    <ThreeDotIcon className="w-6" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={hdlShowEditModal}>
                  <a>Edit</a>
                </li>
                <li onClick={hdlDelete}>
                  <a>Delete</a>
                </li>
              </ul>
            </div>}
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <CloseIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
        {/* <p>I love coding </p> */}
        <p>{post.message || ''}</p>
        {/* { Math.random() > 0.5 && <img src={fakebookLogo} className="p-4 max-h-[200px] object-contain" />} */}
        {post.image && <img src={post.image} className="p-4 max-h-[200px] object-contain"/>}

        
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-end gap-1 cursor-pointer">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className="w-5" />
            </div>
            <p>{post.likes?.length}</p>
          </div>
          <div className="flex">
            <p className="opacity-60"> {post.comments?.length} comments</p>
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* Like, comment, share button */}
        <div className="flex gap-3 justify-between">
          <div className={`flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300 ${Math.random()>0.5 ? 'bg-blue-300' : ''}`}>
            Like
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300">
            Comment
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300">
            Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* comment container */}
      </div>
    </div>
  );
}

export default PostItem;
