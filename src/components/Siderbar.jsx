const Siderbar = () => {
  return (
    <div className="w-[230px] p-4">
        <h1 className="text-2xl font-bold mb-4">한눈에 요약봇</h1>
        <button className="bg-gray-900 hover:bg-gray-800 w-full py-2 px-4 rounded">노트 추가</button>
        <div className=" mt-4">
            <a href="/">HOME</a>
        </div>
    </div>
  );
};

export default Siderbar;