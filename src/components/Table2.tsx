import { Col, Row } from 'antd';
import React,{useEffect, useState} from 'react';
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
import { SearchOutlined,SyncOutlined } from '@ant-design/icons';
import {  Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Abouts from './Abouts';
import {BrowserRouter , Routes,Route} from "react-router-dom";
import MySelect from './MySelect';
import InnerTable from './InnerTable';

const { Option } = Select;


type moreInfoT = {
    "porReceipe": string
    "cipReceipe": string
    "TL2": string[]
    "stepID": string
}

type dataT = {
    key: string
    name: string
    moreInfo: moreInfoT[]
}[]

const columns: ColumnsType<dataT> = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'moreInfo',
      dataIndex: 'moreInfo',
      key: 'moreInfo',
      render: ((text: moreInfoT[], record, index) => {
        return (<InnerTable moreInfos={text} />)
      })
    },
  ];

export default function Table2() {
    const [data, setData] = useState<dataT[]>([])

    useEffect(() => {
        fetch('fake/person.json')
        .then(function(response) {
            // promise
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson as dataT[])
        });
    }, [])

    return <Table columns={columns} dataSource={data} />
}