import { useLocation, Link } from "react-router-dom";
import {  Table, Tag } from 'antd';
import {useState} from 'react';

const AboutPage = (props:any) => {

  const [alreadySelectedRows,setAlreadySelectedRows] = useState(['1','3']);

  const styleContainer: React.CSSProperties = { background: '#ffffff', padding: '8px' };

  interface dataT{
    formId: string;
  }

  const location = useLocation();
  const state= location.state as string;
  console.log(state);

  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'id',
    },
    {
      title: 'Student Name',
      dataIndex: 'name',
    }, 
    {
      title: 'Student Grade',
      dataIndex: 'grade',
      render:(tag:string)=>{
        const color = tag.includes('A')?'Green':tag.includes('B')?"blue":"red"
        return <Tag color={color} key={tag}>{tag}</Tag>
      }
    }       
  ]

  const dataSource = [
    {
      key:'1',
      id:1,
      name:'Student Name 1',
      grade: 'A+'
    },
    {
      key:'2',
      id:2,
      name:'Student Name 2',
      grade: 'A'
    },
    {
      key:'3',
      id:3,
      name:'Student Name 3',
      grade: 'B'
    },
    {
      key:'4',
      id:4,
      name:'Student Name 4',
      grade: 'C',
    },
    {
      key:'5',
      id:5,
      name:'Student Name 5',
      grade: 'A',
    },                 
  ]

  return (
    <>
      <h1>This is About page</h1>
      {/* {state && ( */}
        <div>
          <h3>Passed data:</h3>
          <p>From: {state}</p>
          {/* <p>From: {state.from}</p>
          <p>Message: {state.message}</p>
          <p>Timestamp: {state.timestamp}</p> */}
        </div>
      {/* )} */}
      <hr />
      <Link to="/">Go Home</Link>
      <div style={styleContainer}>
        <Table 
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type:'checkbox',
          selectedRowKeys:alreadySelectedRows,
          onChange:(keys:any)=>{
            setAlreadySelectedRows(keys)
            // console.log(alreadySelectedRows);
          },
          onSelect:(record)=>{
            console.log({record})
          },
          getCheckboxProps:(record)=>({
            // disabled:record.grade === 'C'
          }),
          // hideSelectAll:true
          selections:[
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              key:'even',
              text:'Select even rows',
              onSelect:(allKeys)=>{
                const sekectedKeys  = allKeys.filter(key=>{
                  return key as number  %2==0
                })
                setAlreadySelectedRows(sekectedKeys as string[])
              }
            },
            {
              key:'excellent',
              text:'Select Students with Excellent Grads',
              onSelect:(allKeys)=>{
                const sekectedKeys  = allKeys.filter(key=>{
                   const isExcellent = dataSource.find(student=>{
                    return student.key == key && student.grade.includes('A')
                  })
                  return isExcellent;
                })
                
                
                setAlreadySelectedRows(sekectedKeys as string[])
              }
            }            
          ]
        }}

        >

        </Table> 
        {/* {alreadySelectedRows.map(x=>dataSource[parseInt(x)-1].name).join(',')} */}
        {alreadySelectedRows.map(x=>(<p key={parseInt(x)-1}>{dataSource[parseInt(x)-1].name}</p>))}
        {/* {dataSource[0].name} */}
      </div>  
    </>
  );
};

export default AboutPage;