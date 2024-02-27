import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            {" "}
            10 Users of Aritficial Intelligence in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>

            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4 ">
          <p>@ShaquibKhanhub</p>
          <div className="flex space-x-2">
            <p>19/02/24</p>
            <p>17:03</p>
          </div>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/111151404?v=4"
          alt=""
          className="w-full mx-auto mt-8 "
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          molestias hic perferendis, adipisci, nobis dignissimos nostrum
          doloremque quos asperiores mollitia veniam quaerat excepturi est
          molestiae accusamus voluptates eius dicta laudantium totam enim qui
          itaque. Sequi, unde. Dignissimos quos, corrupti cumque natus, facilis
          obcaecati quidem eum placeat quisquam nulla assumenda perspiciatis.
        </p>
        <div className="flex items-center mt-8 space-x-8 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* comments */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@shaquib_khann</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">21/02/24</p>
                <p className="text-gray-500 text-sm">17:03</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>

                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>

            <p className="px-4 mt-2 ">Nice Information!</p>
          </div>
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@shaquib_khann</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">21/02/24</p>
                <p className="text-gray-500 text-sm">17:03</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>

                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>

            <p className="px-4 mt-2 ">Nice Information!</p>
          </div>
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
         < input className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" placeholder="write a comment" type="text"/>
         <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0 text-sm rounded-md">Add Comment</button>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
