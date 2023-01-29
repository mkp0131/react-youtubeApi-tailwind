import { useRef, useState } from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const inputRef = useRef();

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword("");
    inputRef.current.blur();
    navigate(`/videos/${keyword}`);
  };

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to={"/"} className="flex items-center gap-1">
        <AiFillYoutube className="text-4xl text-brand" />
        <h1 className="font-bold text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          ref={inputRef}
          placeholder="검색"
          className="w-7/12 p-2 outline-none bg-black text-gray-500"
        />
        <button className="bg-zinc-600 px-4">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
