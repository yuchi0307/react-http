
<h1>fetch api 和 custom hooks練習</h1>
  
<ol>
  <li>Custom Hooks are just regular function</li>
  <li>they are just function which contain stateful logic</li> 
  <li>they are not like regular function, custom hooks can use other React hooks and React stateful</li>
</ol>

🍗畢竟 fetch API 對 React 來說是<strong>副作用</strong>，所以我們不能不提及：

```
useEffect(callback[, dependencies]);
```

<ul>
  <li>callback is the function containing the side-effect logic.</li>
  <li>dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.</li>
</ul>

練習如下：沒有寫[dependency]

```
const [ count, setCount ] = useState(0)

function app(){
  useEffect(() => setCount(count + 1));
  
   return (
    <div>
      <input type="text" value={value} onChange={onChange} /> //先省略這邊不看
      <div>Number of changes: {count}</div>
    </div>
  )
}
```

<h3>基本概念</h3>
在瀏覽器載入後, useEffect()執行the side-effect callback 更新 count stste，state 更新就會觸發整個 component re-rendering。<br/> 
在re-rendering後, useEffect() 再次執行 callback 更新 count stste，state 一旦更新就會再觸發整個 component re-rendering, 如此無限循環。<br/>

<h3>進階概念</h3>
<a href="https://github.com/academind/react-complete-guide-code/blob/15-building-custom-react-hooks/code/05-building-a-custom-http-hook/src/App.js">如課程實作的範例</a><br/>

如果dependency寫成下列<br/>

```
useEffect(fetchTasks(),[fetchTasks])
```

![1_hqBTU4z7inqygcjxHifvuw](https://user-images.githubusercontent.com/67968321/145365455-3214f9d6-4c5b-4f01-8b86-9efcb16a7b28.png)

source: <a href="https://javascript.plainenglish.io/5-useeffect-infinite-loop-patterns-2dc9d45a253f">5 useEffect Infinite Loop Patterns</a>
<br/>
function is an <strong>obj</strong> in javascript<br/>
and everytime a function is recreated even if it contains the same logic<br/>
it's a brand new object <strong>in memory</strong>, and therefore useEffect would treat it as a new value,<br/>
and would re execute it!<br/>
<h3>結果論: </h3>
useEffect(callback, [])中的callback(為data or function)如果設定在某個component中,這個callback必須設定為其dependency<br/>
例如:<br/>

```
function app(){
  const{isLoading, error, sendRequest: fetchTasks} = useHttp();
  const fetchTasks =()=>{}; //步驟略
  
  useEffect(fetchTasks(),[fetchTasks]); //重點!但會造成infinite loop所以還要再繼續改
}
```

# React Forms
<h3>表單重點:欄位觸發判斷的時機</h3>
<ol>
 <li>表單提交時</li>
 <li>移開欄位時</li>
 <li>每次欄位的變化</li>
</ol>
1. useState: 用在立即的變化(如狀況3)、提交表單後reset <br/>
2. useRef: 用在提交表單時(如狀況1) </br>
</br>
🍗HTML5 button element有個預設的submit功能,這樣會自動send HTTP request 給 serverm。如果還沒有要提交表單,我們要取消取消事件event的預設行為而使用: Event.preventDefault()
