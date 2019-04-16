import { EXAMPLE_REDUCERS_DATA1, EXAMPLE_REDUCERS_DATA2 } from '../types/example'
import { createAction } from 'redux-actions'

export const ChangeExampleData1 = createAction(EXAMPLE_REDUCERS_DATA1, () => {
  // 在此进行请求
  return {
    data1String: '我是示例数据一'
  }
})

export const GetExampleData2 = createAction(EXAMPLE_REDUCERS_DATA2, () => {
  // 在此进行请求
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('模拟回来的请求数据2')
    }, 1000)
  })
})
