import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
