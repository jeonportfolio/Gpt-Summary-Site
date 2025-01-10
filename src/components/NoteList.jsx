const NoteList = () => {
  return (
    <div className="max-w-[1030px] m-auto rounded-lg bg-emerald-900 p-4">
        <div className="flex justify-end space-x-4 mb-4">
            <button className="bg-gray-900 py-2 px-4 rounded">최근</button>
            <button className="bg-gray-900 py-2 px-4 rounded">이름 순</button>
        </div>
        <ul>
            <li>
                <a href="/" className="flex items-center justify-between bg-emerald-700 p-4 rounded-lg mb-2 hover:bg-emerald-600" >
                    <div>
                        <h3 className="text-lg font-semibold">새로운 노트</h3>
                        <p className="text-sm text-gray400">새로운 내용</p>
                    </div>
                    <div>
                        <time className="text-sm text-gray-400">2025</time>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  );
};

export default NoteList