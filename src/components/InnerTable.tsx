import { Col, Modal, Row } from 'antd';
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

const { Option } = Select;

type moreInfoT = {
    "porReceipe": string
    "cipReceipe": string
    "TL2": string[]
    "stepID": string
}

const columns: ColumnsType<moreInfoT> = [
  {
    title: 'Op No',
    dataIndex: 'stepID',
    key: 'stepID'
    
  },
  {
    title: 'POR Receipe',
    dataIndex: 'porReceipe',
    key:  'porReceipe'
    
  },
  {
    title: 'CIP Receipe',
    dataIndex: 'cipReceipe',
    key:  'cipReceipe'
  },
  {
    title: 'TL2',
    dataIndex: 'TL2',
    key:'TL2',
    render: (text: string[]) => 
      <>
        {text.join(',')}
      </>
    
  },  
];

export default function InnerTable(props: {moreInfos: moreInfoT[] }) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {
        // props.moreInfos.map(e => {
        //   return (
        //     <>
        //     <p>{e.porReceipe}</p>
        //     <p>{e.cipReceipe}</p>
        //     {e.TL2.map(tl => { return <p>{tl}</p>})}
        //     <p>{e.stepID}</p>
        //     </>
          
        //   )
        //   })
        <Table rowKey={(e: moreInfoT) => {return e.stepID+e.cipReceipe+e.porReceipe+e.TL2}} dataSource={props.moreInfos} columns={columns}/>  
      }
      </Modal>
    </>
    )
}