import { LinePath, ComputedPathObj } from '@/types'
import { useState } from 'react'

export function useAnimationPath(initPath: LinePath): {
  computedPathObj: ComputedPathObj
  updateComputedPath: (newPath: LinePath) => void
} {
  const [computedPathObj, setComputedPathObj] = useState<ComputedPathObj>({
    from: initPath,
    to: initPath
  })

  function updateComputedPath(newPath: LinePath): void {
    const tempObj = computedPathObj
    tempObj.from = computedPathObj.to
    tempObj.to = newPath
    console.log('tmpObj: ', tempObj)
    setComputedPathObj(tempObj)
  }
  return { computedPathObj, updateComputedPath }
}
