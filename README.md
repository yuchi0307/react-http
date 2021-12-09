# react-http
api 練習<br/>
<ol>
  <li>Custom Hooks are just regular function</li>
  <li>they are just function which contain stateful logic</li> 
  <li>they are not like regular function, custom hooks can use other React hooks and React stateful</li>
</ol>


<h3>概念複習useEffect infinite loop：</h3>

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

fetchTasks()為我custom hook 中管理state狀態的function,一觸發就會使組件重新渲染<br/>

<br/>
function is an <strong>obj</strong> in javascript<br/>
and everytime a function is recreated even if it contains the same logic<br/>
it's a brand new object <strong>in memory</strong>, and therefore useEffect would treat it as a new value,<br/>
and would re execute it!<br/>
