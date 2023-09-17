import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col p-5">
      <input type="text" required placeholder="Username" className="peer border p-1 border-gray-400 rounded-sm"></input>
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input is invalid
      </span>
      <span className="hidden peer-valid:block peer-valid:text-teal-500">
        Awesome username
      </span>
      <span className="hidden peer-hover:block peer-hover:text-amber-500">
        Hello
      </span>
      <input type="submit" value="Login" className="bg-white"></input>
    </form>
  );
}

export default Home;