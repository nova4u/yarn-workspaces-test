import type { NextPage } from "next";
import { Button, Input } from "@dmrk/ui";

const Home: NextPage = () => {
  return (
    <div>
      <Button>vsem privet</Button>
      <Input name="name" id="123" align="haha" />
      <h2 className="text-violet-600">asdadss</h2>
    </div>
  );
};

export default Home;
