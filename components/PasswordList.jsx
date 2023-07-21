import PasswordCard from '@components/PasswordCard';

const PasswordList = ({ data, handleEdit, handleDelete }) => {
  return (
    <div className='w-full grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
      {data.map((psw) => (
        <PasswordCard
          key={psw._id}
          post={psw}
          handleEdit={() => handleEdit && handleEdit(psw)}
          handleDelete={() => handleDelete && handleDelete(psw)}
        />
      ))}
    </div>
  )
}

export default PasswordList