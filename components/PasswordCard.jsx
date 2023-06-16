'use client';

const PasswordCard = ({ siteUrl, email, password }) => {
  return (
    <div className="w-full flex flex-col glassmorphism">
        <p className="text-2xl font-bold flex items-center flex-col text-white bg-gradient-to-r from-primary-green to-black rounded-t-xl p-3 mb-3">{ siteUrl }</p>
        <h1 className="card-item-title">Email:<span className="card-item-value">{ email }</span></h1>
        <h1 className="card-item-title">Password:<span className="card-item-value">{ password }</span></h1>
    </div>
  )
}

export default PasswordCard