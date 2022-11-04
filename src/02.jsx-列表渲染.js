//1.react如何完成列表渲染
//2.技术方案：map 重复渲染的是哪个模板 就return 谁
//3.注意事项：遍历列表同时需要一个类型为number/string不可重复的key 提高diff性能
//key仅仅在内部使用，不会出现在真实的dom结构中

// 来个列表
const songs = [
    {id: 1, name: '痴心绝对'},
    {id: 2, name: '像我这样的人'},
    {id: 3, name: '南山南'}
]


function App() {
    return (
        <div className="App">
            {songs.map(item => (<li key={item.id}>{item.name}</li>))}
        </div>
    );
}

export default App;
