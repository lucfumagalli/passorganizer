import PasswordCard from '@components/PasswordCard';

const PasswordList = ({ data, handleDelete }) => {
  return (
    <div className='w-full grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
      {data.map((psw) => (
        <PasswordCard
          post={psw}
          handleDelete={() => handleDelete && handleDelete(psw)}
        />
      ))}
    </div>
  )
}

export default PasswordList