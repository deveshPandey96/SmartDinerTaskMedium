import React, { useState } from "react";
import orders from "./Orders";
import Details from "./Details";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {

 

 const [startDate, setStartDate] = useState(new Date());
    

 
 const newArray = orders.filter(data => {return data.orderStage==='new'})
 const processingArray = orders.filter(data => {return data.orderStage==='processing'})
 const finishedArray = orders.filter(data => {return data.orderStage==='finished'})
 const [current, setOrder] = useState([]);

  function allOrders(){
   setOrder(orders)
  }

  
 function processingOrders(){
  setOrder(processingArray)
  }

 function newOrders(){
  setOrder(newArray)
  }
  
 function finishedOrders(){
  setOrder(finishedArray)
  }

 function dateOrders(){  
  var year=startDate.getFullYear();
  var month=startDate.getMonth()+1;
  var day=startDate.getDate();
  var orderDate=(year.toString()+"-"+month.toString()+"-"+day.toString());
  const dateArray = orders.filter(data => {return data.orderDate===orderDate})
  setOrder(dateArray)
  }

  return (
    <div className="App">
      <header>
      <button onClick={allOrders}>All</button>

      <button onClick={newOrders}>New</button>

      <button onClick={processingOrders}>Processing</button>

      <button onClick={finishedOrders}>Finished</button>

      <button onClick={dateOrders}>Date</button>

      <ReactDatePicker className="date" selected={startDate} onChange={(date) => setStartDate(date) } locale="en" />
      </header>
      
      
      {current.map(data=>
      <Details
      key={data.orderId}
      stage={data.orderStage}
      name={data.orderName}
      date={data.orderDate} />)}
            
    </div>
  );
}

export default App;