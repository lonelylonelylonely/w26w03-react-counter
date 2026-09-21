import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={ () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        // setCount(count + 1)는 이전 값에 1을 더하는 방식으로, setCount(prev => prev + 1)는 이전 상태를 기반으로 새로운 상태를 계산하는 방식입니다.
        // setCount(count + 1) 방식은 비동기적으로 상태가 업데이트되기 때문에, 여러 번 호출하면 이전 상태를 기반으로 한 업데이트가 아닌, 
        // 동일한 상태를 기반으로 한 업데이트가 발생 -> 결과적으로 count 값이 1씩 증가하는 것이 아니라, 마지막 호출에서만 상태가 업데이트되어 최종적으로 count 값이 1 증가
        // 즉, setCount(prev => prev + 1) 방식은 이전 상태를 기반으로 새로운 상태를 계산하기 때문에, 여러 번 호출해도 이전 상태를 기반으로 한 업데이트가 발생 -> 결과적으로 count 값이 5 증가
        // 비동기식 이므로 발생하는 문제 -> 단순히 변수 하나가 아니라 함수를 넣어야 한다

      } }>
        증가
      </button>
    </>
  )
}

export default App
