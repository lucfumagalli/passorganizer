'use client';
import { useState } from "react";
import Image from "next/image";

const PasswordCard = ({ post, handleEdit, handleDelete }) => {
  const [copiedEmail, setCopiedEmail] = useState("");
  const [copiedPassword, setCopiedPassword] = useState("");

  const handleCopyEmail = () => {
    setCopiedEmail(post.email);
    navigator.clipboard.writeText(post.email);
    setTimeout(() => setCopiedEmail(false),1000);
  }
  const handleCopyPassword = () => {
    setCopiedPassword(post.password);
    navigator.clipboard.writeText(post.password);
    setTimeout(() => setCopiedPassword(false),1000);
  }

  return (
    <div className="w-full flex flex-col glassmorphism">
      <div className="flex justify-between bg-gradient-to-r from-primary-green to-black rounded-t-xl p-3">
        <p className="text-2xl font-bold flex text-center text-white">{post.siteUrl}</p>
        <div className="flex flex-row gap-2">
          <div className='copy_btn' onClick={handleEdit}>
            <Image
              src={'assets/icons/edit.svg'}
              alt={'assets/icons/edit.svg'}
              width={12}
              height={12}
              />
          </div>
          <div className='copy_btn' onClick={handleDelete}>
            <Image
              src={'assets/icons/trash.svg'}
              alt={'assets/icons/trash.svg'}
              width={12}
              height={12}
              />
          </div>
        </div>
      </div>
      
      <div className="flex flex-row justify-between  p-3">
        <h1 className="card-item-title">Email:<span className="card-item-value">{post.email}</span></h1>
        <div className='copy_btn' onClick={handleCopyEmail}>
          <Image
            src={copiedEmail === post.email ? '/assets/icons/tick.svg' : 'assets/icons/copy.svg'}
            alt={copiedEmail === post.email ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
            />
        </div>
      </div>
      <div className="flex flex-row justify-between pb-3 px-3">
        <h1 className="card-item-title">Password:<span className="card-item-value">{post.password}</span></h1>
        <div className='copy_btn' onClick={handleCopyPassword}>
          <Image
            src={copiedPassword === post.password ? '/assets/icons/tick.svg' : 'assets/icons/copy.svg'}
            alt={copiedPassword === post.password ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  )
}

export default PasswordCard