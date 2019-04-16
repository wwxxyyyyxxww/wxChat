import { handleActions } from 'redux-actions'
import { EXAMPLE_REDUCERS_DATA1, EXAMPLE_REDUCERS_DATA2 } from '../types/example'

export default handleActions({
  [EXAMPLE_REDUCERS_DATA1] (state, payload) {
    // 可以在此进行运算
    return {
      ...state,
      example_reducers_data1: payload.payload.data1String
    }
  },
  [EXAMPLE_REDUCERS_DATA2] (state, payload) {
    // 可以在此进行运算
    return {
      ...state,
      example_reducers_data2: payload.payload
    }
  }
}, {
  example_reducers_data1: '默认示例数据一', // 默认值
  example_reducers_data2: '默认示例数据二' // 默认值
})
