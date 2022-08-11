import { useLocation, Link } from "react-router-dom";
import {  Table, Tag,Button } from 'antd';
import {useState} from 'react';

const AboutPage = (props:any) => {

  const [alreadySelectedRows,setAlreadySelectedRows] = useState(['1','3']);

  const styleContainer: React.CSSProperties = { background: '#ffffff', padding: '8px' };
  const [rowClickItem,setRowClickItem] = useState<number>(-1);

  interface dataT{
    formId: string;
  }

  const location = useLocation();
  const state= location.state as string;
  console.log(state);

  const onAddSelectedItem = ()=>{
    const randomNumber = parseInt((Math.random()*1000).toString())
    const newItem = {
      // key:randomNumber.toString(),
      // id:randomNumber,
      // name:'Name '+randomNumber,
      // grade: 'Grade '+randomNumber,
      key:(dataSource.length+1).toString(),
      id:dataSource[rowClickItem].id,
      name:dataSource[rowClickItem].name,
      grade: dataSource[rowClickItem].grade,
    }
    setDataSource(pre=>{
      const newDatatSource = [...pre]

      
      console.log('re Order',rowClickItem)
      // 遇到重複的(選取的) ,add twice (self+copySelf)
      const reOrderDatatSource = []
      for(let i=0;i<dataSource.length;i++)
      {
        reOrderDatatSource.push(dataSource[i])
        if(i==rowClickItem){
          console.log('copy this(add twice)',rowClickItem)
          reOrderDatatSource.push(newItem)
        }
      }
      // return [...pre,newItem]
      return reOrderDatatSource
    }
      
    )
  }
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

  const [dataSource,setDataSource] = useState([
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
  ])

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
      <Link to="/">Go Home</Link> <hr/>
      <Button onClick={onAddSelectedItem}>Add Selected-copy Item</Button>
      <div style={styleContainer}>
        <Table 


        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              console.log('onRow Click?',rowIndex)
              setRowClickItem(rowIndex as number)
            }, // click row
            onDoubleClick: event => {}, // double click row
            onContextMenu: event => {}, // right button click row
            onMouseEnter: event => {}, // mouse enter row
            onMouseLeave: event => {}, // mouse leave row
          }; 
        }} 

        rowClassName={(record,index)=>index===rowClickItem?"johnting-selected":""}

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