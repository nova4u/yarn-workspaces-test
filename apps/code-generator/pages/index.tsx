import type { NextPage } from "next";
import { Button, Input } from "@dmrk/ui";

const Home: NextPage = () => {
  return (
    <div>
      <Button onClick={() => console.log(`123123123`)}>
        Hello to everyone
      </Button>
      <Input name="name" id="name" placeholder="Enter your name please" />
      <h2 className="text-violet-600">asdadss</h2>
    </div>
  );
};

export default Home;
