// 1. 识别常规的变量
const teacher = '章'
// 2.原生js方法调用
const getAge = () => {
    return 10
}
// 3.三元运算符
const tag = true

function App() {
    return (
        <div className="App">
            {teacher}
            {getAge()}
            {tag ? 'A' : 'B'}
        </div>
    );
}

export default App;
