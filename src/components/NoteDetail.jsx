const NoteDetail = () => {
  return (
    <div className="bg-emerald-900 p-6">
        <div className="flex justify-between items-center mb-4">
            <div>
                <time className="block text-gray-400 text-sm">2025</time>
                <input 
                    type="text" 
                    className="bg-transparent text-2xl font-bold focus-within:outline-green-600" 
                />
            </div>
            <div>
                <button className="bg-red-600 hover:bg-red-500 py-2 px-4 rounded">삭제</button>
            </div>
        </div>
        <section className="flex">
            <div className="flex-1 p-4 rounded mr-4 bg-emerald-700">
                <h2 className="text-lg font-semibold mb-2">메모</h2>
                <textarea className="bg-emerald-800 w-full h-64 p-2 rounded resize-none focus:(ring-2 ring-lime-500)"></textarea>
                <button className="mt-4 bg-green-600 hover:bg-green-500 py-2 px-4 rounded">요약</button>
            </div>
            <div className="flex-1 p-4 rounded bg-emerald-700">
                <h3 className="text-lg font-semibold mb-2">요약 결과</h3>
                <div className="text-gray-300 h-64 bg-emerald-800 p-2 rounded">요약 내용</div>
            </div>
        </section>
    </div>
  );
};

export default NoteDetail;