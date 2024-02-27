const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left side div */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://avatars.githubusercontent.com/u/111151404?v=4"
          className="h-full w-full border-2 rounded-full"
          alt=""
        />
      </div>
      {/* right side div */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Users of Aritficial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@ShaquibKhanhub</p>
          <div className="flex space-x-2">
            <p>19/02/24</p>
            <p>17:03</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dolores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          quibusdam.
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
