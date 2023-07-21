'use client';
import { useSession } from "next-auth/react";
import { useEffect,useState } from "react";
import ListProviders from "@components/ListProviders";
import PasswordList from "@components/PasswordList";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: session } = useSession();
  const [myPassword, setMyPassword] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPasswords = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/get-password`);
      const data = await response.json();
      setMyPassword(data);
    };

  if (session?.user.id) fetchPasswords();
    console.log()
  }, [session?.user.id]);

  const handleEdit = async (psw) => {
    router.push(`/update-password?id=${psw._id}`);
  }

  const handleDelete = async (psw) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this password?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/password/${psw._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPsw = myPassword.filter((item) => item._id !== psw._id);

        setMyPassword(filteredPsw);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if(!session?.user){
    return (
        <section className='flex w-full justify-center flex-center flex-col flex-grow mt-10'>
          <h1 className='head_text text-center'>
            Welcome to
            <br />
            <span className='highlighted green_gradient text-center'>PASSORGANIZER</span>
          </h1>
          <p className="desc text-center mx-auto">Please log in to add your first password or to see yours</p>
          <ListProviders/>
        </section>
    );
  }
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center mb-4'>
        Search your
        <br />
        <span className='highlighted green_gradient text-center'>PASSWORD</span>
      </h1>
      <PasswordList
        data={myPassword}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default Home;
