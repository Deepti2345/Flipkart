import { useEffect, useState } from "react"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
function Men()
{
    const[apidata,setData] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((data)=>{
                console.log(data)
                setData(data)
            })
        })
    },[]

    )
    return(
        <div>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
         {
            apidata.map((item)=>
                item.category=="men's clothing"?
              <MDBCol>
        <MDBCard>
          <center>
          <MDBCardImage
            src={item.image}
            alt='...'
            position='top'
            style={{width:"100px",height:"150px"}}
          />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"purple"}}>{item.price*80}Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"yellow"}}>{item.category}</MDBCardTitle>
            <MDBCardText>
            {item.description.substr(0,100)}
            </MDBCardText>
            <MDBBtn>Add to Card</MDBBtn>
          </MDBCardBody>
          </center>
        </MDBCard>      
      </MDBCol>:null
            )
         }
    </MDBRow>
        </div>
    )
}
export default Men