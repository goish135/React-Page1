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

const { Option } = Select;


const handleMenuClick: MenuProps['onClick'] = e => {
  // message.info('Click on menu item.');
  console.log('click', e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
      },
      {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
      },
      {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
      },
    ]}
  />
);


const style: React.CSSProperties = { background: '#ffffff', padding: '8px 0' };

const styleContainer: React.CSSProperties = { background: '#ffffff', padding: '8px' };





const data1 = {
  from: "Link #1",
  message: "Welcome to KindaCode.com",
  timestamp: Date.now(),
};

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>

        <Link to="/abouts" state={record.name}>
          About
        </Link> 

      </Space>
    ),
  },
];


// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: '地球',
//     tags: ['cool', 'teacher'],
//   },
//   {
//     key: '4',
//     name: 'Angular',
//     age: 32,
//     address: '火星',
//     tags: ['cool', 'teacher'],
//   }, 
//   {
//     key: '5',
//     name: 'React',
//     age: 32,
//     address: '地球',
//     tags: ['cool', 'teacher'],
//   },   
// ];
const FirstTable = () => {
  
  
  /*
  const [curPage,setCurPage] = useState(()=>{
    let a = JSON.parse(localStorage.getItem("myData") as string);
    console.log('test:',a);
    return a || "";
  })*/

  const [curPage, setCurPage] = useState(() => {
    let sCurPage = parseInt(localStorage.getItem("curPage") as string) 
    return isNaN(sCurPage) ? 0: sCurPage;
  });


  //const [curPage, setCurPage] = useState(-1);

  const [filterInput, setFilterInput] = useState('');
  const [tech, setTech] = useState('');
  const [address,setAddress] = useState('');
  const [category,setCategory] = useState('');

  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [ddAddress,setDDAdress] = useState([]);
  const [data,setData] = useState<DataType[]>([]);

  //const filterData = () => {
    // if(filterInput === '') return data

    // if(isNaN(filterInput)) {
    //   return data.filter(({ name }) => name.includes(filterInput))
    // }
    // return data.filter(({ age }) => age === +filterInput)

    
    //return results;
  //}

  /*
  useEffect(() => {
    const results = data.filter(elememt=>{
      return (!tech || elememt.name.includes(tech)) && (!address || elememt.address.includes(address));
   });
   console.log(results);
   setDataSource(results);
    
  }, [tech, address]);*/
  // type dataT = {
  //   address: string;
  // }
  
  /*
  useEffect(() => {
    let sCurPage = parseInt(localStorage.getItem("curPage") as string);
    if(isNaN(sCurPage)) {
      sCurPage = 0;
      localStorage.setItem("curPage", sCurPage.toString());
    }
    console.log('sCurPage:', sCurPage);
    console.log('curPage:', curPage);
    if(curPage === -1) {
      setCurPage(sCurPage)
    } else {
      localStorage.setItem("curPage", curPage.toString());
    }
}, [curPage]);*/


useEffect(() => {
  localStorage.setItem("curPage", curPage.toString());
}, [curPage]);

/*
bad timeline
curPage = useState(0)
localStorage.setItem("curPage", curPage)
console.log(localStorage.getItem("curPage"))


good timeline
curPage = useState(-1)
scurPage = localStorage.getItem("curPage") 
if curPage == -1 
  curPage = scurPage
else 
  localStorage.setItem("curPage", curPage)
*/

/*
  useEffect(() => {
       let a = JSON.parse(localStorage.getItem("myData") as string);
       console.log('getItem:',a);
       // console.log(localStorage.key(0));
  }, []);*/

  useEffect(()=>{
    axios
    .get("./fake/address.json")
    .then((res)=>{
      setDDAdress(res.data);
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    });

  },[]);

  useEffect(()=>{
    axios
    .get("./fake/person.json")
    .then((res)=>{
      const data = res.data as DataType[]
      console.log(data);
      
      const results = data.filter(elememt=>{
       return ((!tech || elememt.name.includes(tech)) && (!address || elememt.address.includes(address)));
     });
     //console.log(results);
      // setData(data);
      setDataSource(results);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[])

  
  // useEffect(()=>{
  //   axios
  //   .get("./fake/person.json")
  //   .then((res)=>{
  //     // setDDAdress(res.data);
  //     setData(res.data);
  //     console.log(res.data);

  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   });

  // },[]);


  // useEffect(() => {
  //   onFilter();
  // },[]);


  const onFilter = () => {
    const results = data.filter(elememt=>{
      return ((!tech || elememt.name.includes(tech)) && (!address || elememt.address.includes(address)));
   });
   console.log(results);
   setDataSource(results);
  };


  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    setAddress(value);
    console.log(address);
  };


  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const onSearchButton : React.MouseEventHandler<HTMLElement> = (e) => {
    console.log('input Tech:'+tech);
    // setTech(tech);
    axios
    .get("./fake/person.json")
    .then((res)=>{
      const data = res.data as DataType[]
      console.log(data);
      
      const results = data.filter(elememt=>{
       return ((!tech || elememt.name.includes(tech)) && (!address || elememt.address.includes(address)));
     });
     //console.log(results);

      // setData(data);
      setDataSource(results);
    })
    .catch((error)=>{
      console.log(error);
    });

    
    
    console.log(ddAddress.length)
  }
  // const onSearchButton2 = (event: React.MouseEvent) => {
  //   console.log('input Tech:'+tech);
  // }

  // useEffect(() => {
  //   onResetButton;
  // },[]);

  const onResetButton : React.MouseEventHandler<HTMLElement> = (e) => {   
      setTech('');
      setAddress('');
      setCategory('');
      setDataSource([]);

  }

  return (
 
  <>
  <div style={styleContainer}>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    
      <Col className="gutter-row" span={4}>
        <MySelect onChange={onChange}  ddAddress={ddAddress} value={address} />
      </Col>
      <Col className="gutter-row" span={4}>
        <MySelect onChange={(value: string) => {setCategory(value);}}  ddAddress={["jack", "lucy", "tom"]} value={category} />
      </Col>
      <Col className="gutter-row" span={4}>
        <Input placeholder="Basic usage" />
      </Col> 
      <Col className="gutter-row" span={4}>
        <Input placeholder="Basic usage" />
      </Col> 
      <Col className="gutter-row" span={4}>
        <Input placeholder="Basic usage" />
      </Col>                  
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={4}>
          <div style={style}><Input placeholder="Tech" value={tech} onChange={e=>setTech(e.target.value)}/></div>
          
        </Col> 
        <Col className="gutter-row" span={4}>
        <div style={style}><Input placeholder="Basic usage" /></div>
        </Col> 
        <Col className="gutter-row" span={4}>
        <div style={style}><Input placeholder="Basic usage" /></div>
        </Col> 
        <Col className="gutter-row" span={4}>
        <div style={style}><Input placeholder="Basic usage" /></div>
        </Col> 
        <Col className="gutter-row" span={2}>
        <div style={style}>
          <Button type="primary" icon={<SearchOutlined />} onClick={onSearchButton}>
            Search
          </Button>
        </div>
        </Col>
        <Col className="gutter-row" span={2}>
        <div style={style}>
          <Button  onClick={onResetButton}>
            Reset
          </Button>
        </div>
        </Col>
    </Row>


    <Row>
      <Col span={24}><Table columns={columns} dataSource={dataSource} pagination={ {pageSize:1,
        defaultCurrent: curPage,
        onChange(curPage,pageSize){
          setCurPage(curPage);
          console.log('curPage:',curPage);
          console.log(pageSize);
        }} } /></Col>

    </Row>
    </div>
  </>
)};

export default FirstTable;