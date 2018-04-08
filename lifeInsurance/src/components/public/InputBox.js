import React from 'react'

const InputBox = ({val, onChangeVal, tip,maxLength}) => (
  <input type="text" placeholder={tip ? tip : '请输入'} value={val} onChange={e => onChangeVal((e.target.value).trim())} maxLength={maxLength} />
)

export default InputBox