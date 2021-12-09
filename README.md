# react-http
api 練習<br/>
<ol>
  <li>Custom Hooks are just regular function</li>
  <li>they are just function which contain stateful logic</li> 
  <li>they are not like regular function, custom hooks can use other React hooks and React stateful</li>
</ol>

<h3>概念複習：</h3>
custom hook 中管理state狀態,一觸發就會使組件重新渲染<br/>
所以一旦執行,有用到custom hook的component就會重新渲染<br/>
<br/>
function is an <strong>obj</strong> in javascript<br/>
and everytime a function is recreated even if it contains the same logic<br/>
it's a brand new object <strong>in memory</strong>, and therefore useEffect would treat it as a new value,<br/>
and would re execute it!<br/>
