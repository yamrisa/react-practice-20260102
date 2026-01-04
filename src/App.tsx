import { useState } from "react"; //Reactのライブラリから必要なHooksの読み込み

// 型宣言
type Status = "todo" | "doing" | "done"

type Todo = {
  id: number
  title: string
  status: Status
}

function App(){
  // const [count, setCount] = useState(0) //初回レンダリング時読まれる、初期値の状態定義
  
  // state定義、Todo型の空の配列を用意
  const [todos, setTodos] = useState<Todo[]>([]) //useState<型>(初期値)
  const [inputTitle, setInputTitle] = useState("")

  function addTodo(title: string){ //handleAddのinputTitleを受け取る
    const newTodo:Todo = {
      id: Date.now(),
      title,
      status: "todo",
    }

    setTodos(prev => [...prev, newTodo])
  }

  function handleAdd(){ //ボタン押したらaddtitleへ引数渡す
    if (inputTitle.trim() === "") return //バリデーション

    addTodo(inputTitle)
    setInputTitle("")
  }

  function deleteTodo(id: number) {
    setTodos (prev => prev.filter(todo => todo.id !== id))
  }

  return ( //JSXで返す内容
    <>
      <h1>React Practice</h1>
      {/* <button onClick={() => setCount(count + 1)}> クリックされたらsetCountを実行し再描画 */}
        {/* count: {count} */}
      {/* </button> */}

      <input 
        type="text"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)} 
      />

      <button onClick={handleAdd}>
        追加
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} [{todo.status}]
            <button onClick={() => deleteTodo(todo.id)}>
              削除
            </button>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App //main.tsxでimportAppfrom'./App'できる