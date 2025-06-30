// HTMLの各要素を変数に代入（DOMから取得）
const todoInputElem = document.querySelector('.todo-input');             // ToDo入力欄
const todoListElem = document.querySelector('.todo-list');               // ToDoリスト表示部分
const completeAllBtnElem = document.querySelector('.complete-all-btn');  // 「すべて完了」ボタン
const leftItemsElem = document.querySelector('.left-items');             // 残りのToDo数を表示する要素
const showAllBtnElem = document.querySelector('.show-all-btn');          // 「すべて表示」ボタン
const showActiveBtnElem = document.querySelector('.show-active-btn');    // 「アクティブのみ表示」ボタン
const showCompletedBtnElem = document.querySelector('.show-completed-btn');  // 「完了のみ表示」ボタン
const clearCompletedBtnElem = document.querySelector('.clear-completed-btn'); // 完了したToDoを削除するボタン


// ToDoの一意なIDを管理する変数とその更新関数
let id = 0;
const setId = (newId) => { id = newId };

// 「すべて完了済みかどうか」を管理する変数とその更新関数
let isAllCompleted = false;
const setIsAllCompleted = (bool) => { isAllCompleted = bool };

// 表示タイプ（all, active, completed）を管理する変数とその更新関数
let currentShowType = 'all';
const setCurrentShowType = (newShowType) => currentShowType = newShowType;

// ToDoリスト本体（配列）とその更新関数
let todos = [];
const setTodos = (newTodos) => {
    todos = newTodos;
}

// ToDoをすべて取得
const getAllTodos = () => {
    return todos;
}

// 完了済みのToDoだけを取得
const getCompletedTodos = () => {
    return todos.filter(todo => todo.isCompleted === true);
}

// アクティブ（未完了）のToDoだけを取得
const getActiveTodos = () => {
    return todos.filter(todo => todo.isCompleted === false);
}

// アクティブなToDo数をカウントして表示（UI反映）
const setLeftItems = () => {
    const leftTodos = getActiveTodos();
    // ← 文字列テンプレート記法のミス: `'${}``ではなく `` `...` `` を使うべき
    leftItemsElem.innerHTML = `${leftTodos.length} items left`;
}

// すべてのToDoを「完了」にする関数（UIも更新）
const completeAll = () => {
    completeAllBtnElem.classList.add('checked'); // ボタンに「チェック済み」クラスを追加
    const newTodos = getAllTodos().map(todo => ({ ...todo, isCompleted: true })); // すべてのToDoを完了状態に変更
    setTodos(newTodos); // 状態を更新
}

// すべてのToDoを「未完了」に戻す関数
const incompleteAll = () => {
    completeAllBtnElem.classList.remove('checked'); // 「チェック済み」クラスを削除
    const newTodos = getAllTodos().map(todo => ({ ...todo, isCompleted: false })); // すべてのToDoを未完了状態に変更
    setTodos(newTodos); // 状態を更新
}
