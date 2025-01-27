import React from 'react'
import { useCustomHook } from '@josh.baker/custom-hook-npm-repo'

function TestNpmRegistryCustomHook() {
  let [customHookData, setCustomHookData] = useCustomHook([
    'one',
    'two',
    'three',
  ])
  return (
    <div style={{ textAlign: 'center', height: '100%', background: 'blue' }}>
      <h1>TestNpmRegistryCustomHook</h1>
      <div>
        <form
          action=""
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            onChange={(e) =>
              setCustomHookData([...customHookData, e.target.value])
            }
          />
        </form>
      </div>
      <div>
        {customHookData.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </div>
      <div>YO</div>
    </div>
  )
}

export default TestNpmRegistryCustomHook
