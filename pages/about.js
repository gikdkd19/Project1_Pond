import React, { Component } from 'react'
import Theme from '../components/theme';

 class About extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <h1> เกี่ยวกับฉัน </h1>
        
      </div>
    )
  }
}

export default Theme(About);


//calss  componet ต้องประกาศคอสรัจเตอร์  

//hook   componet  ทำงานได้เลย เป็นฟังชั่นอยู่แล้ว ไม่มี this 

//const use stard