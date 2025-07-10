export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">CSSテストページ</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tailwind CSSが動作しているか確認</h2>
        <p className="text-gray-600">
          このページが青い背景に白いカードが表示されていれば、Tailwind CSSは正常に動作しています。
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          テストボタン
        </button>
      </div>
    </div>
  );
}