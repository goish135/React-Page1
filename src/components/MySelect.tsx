import { Select } from "antd";
import React, { useState } from "react";


const { Option } = Select


type propsT = {
    onChange: (value: string) => void
    onSearch?: (value: string) => void
    ddAddress: string[]
    value: string
}

export default function MySelect(props: propsT) {

return (
    <Select
    // showSearch
    placeholder="Select a person"
    // optionFilterProp="children"
    onChange={props.onChange}
    value={props.value}
    // filterOption={(input, option) =>
    //   (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
    // }
  >
    <Option value="">None</Option>
    {props.ddAddress.map((item,index)=>(
      <Option key={index} value={item}>{item}</Option>
    ))}

  </Select>        
)
    
}