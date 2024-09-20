mport React, { useState } from 'react'

function Counter() {
   const [count,setCount]=useState(0)
   const [showCount,setshowCount]=useState(false)
  return (
    <div>
        <button onClick={()=>setshowCount(!showCount)}>{showCount? 'hide show count':'show count'}</button>
 {
showCount ?(
<>
 <h1>counter show open</h1>
<h2>counter is -{count}</h2>
<button onClick={()=>setCount(count+1)}> increment</button> </>
):null
}
        
    </div>
  )
}

export default Counter
