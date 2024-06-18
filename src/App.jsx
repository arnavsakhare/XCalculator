import { useState } from 'react'
import './App.css'

function App() {
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState("")

  const handler = (e) => {
    setExpression((prev) => prev + e.target.innerText)
  }

  const evaluate = () => {
    try {
      if(expression.length == 0){
        throw new Error("Empty String");
      }

      const ans = eval(expression);
      
      if (isNaN(ans)) {
        setResult("NaN");
      } else {
        setResult(ans);
      }

    } catch (error) {
      setResult("Error")
      console.log(error)
    }
  }

  return (
    <div className='card'>
      <h1>React Calculator</h1>

      <input readOnly type="text" name='expression' value={expression}/>
      {result && <p>{result}</p>}

      <div className='keypad'>
        <button onClick={handler}>
          7
        </button>
        <button onClick={handler}>
          8
        </button>
        <button onClick={handler}>
          9
        </button>
        <button onClick={handler}>
          +
        </button>
        <button onClick={handler}>
          4
        </button>
        <button onClick={handler}>
          5
        </button>
        <button onClick={handler}>
          6
        </button>
        <button onClick={handler}>
          -
        </button>
        <button onClick={handler}>
          1
        </button>
        <button onClick={handler}>
          2
        </button>
        <button onClick={handler}>
          3
        </button>
        <button onClick={handler}>
          *
        </button>
        <button onClick={() => {
            setExpression("");
            setResult("");
          }}
        >
          C
        </button>
        <button onClick={handler}>
          0
        </button>
        <button onClick={evaluate}>
          =
        </button>
        <button onClick={handler}>
          /
        </button>
      </div>


    </div>
  )
}

export default App
