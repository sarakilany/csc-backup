import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import "./LatestRequests.css";


function LatestRequests() {

    const state = useSelector((state) => state);

  return (
    <>
    {
        (()=>{
            if(state.has_loged==null){
             return(
            <div></div>
        )
            }
            else if( state.has_loged.requests.length == 0){
                return(
                    <div className=' white-bg p-5'>
               <Container>
                <h2 className='dark-text text-center mt-1 mb-4'>You Haven't Made Any Requests &#9785;</h2>
                   
                    <Link className="text-decoration-none" to="/admin/request">
          <Button
            className="d-block mx-auto my-2 mt-3 px-4 py-2 home-btn shadow-none"
            variant="primary"
          >
            Make Your First Request &#9786;
          </Button>
        </Link>
               </Container>
               </div>
                )
            }
            else if(state.has_loged.type=="individual" || state.has_loged.type=="org"){
               return (<div className=' white-bg p-5'>
               <Container>
                <h2 className='dark-text text-center mt-1 mb-4'>Your Latest Activities</h2>
                   <Row>
                    {state.has_loged.requests.map((req,i)=>{
                        return (
                       <div className='col-lg-3 col-md-6 col-12 p-3'>
                           <div className='req-card rounded-3 p-2'>
                                <h4 className='py-3 my-1 text-center dark-text border-bottom'>Req Num : {req.req_Id}</h4>
                                <p className='mt-3 mb-1 text-center green-text'>Piking Date : {req.req_date}</p>
                                <p className='my-1 text-center green-text'>Quantity : {req.quantity}</p>
                                <p className='text-center'>
                                {
                                    (req.status==="pending")
                                    ?
                                    (
                                        <span className='my-1 mx-auto d-inline-block text-center white-text bg-info'>{req.status}</span>
                                        ):(
                                        <span className='my-1 mx-auto d-inline-block text-center white-text white-text green-bg'>{req.status}</span>                                  
                                    )
                                }
                                </p>
                           </div>
                       </div>
                        )
                    })}
                    <Link className="text-decoration-none" to="/admin/allRequests">
          <Button
            className="d-block mx-auto my-2 mt-3 px-4 py-2 home-btn shadow-none"
            variant="primary"
          >
            See All
          </Button>
        </Link>
                   </Row>
               </Container>
               </div>)
            }
        })()
        
    }
    </>
    )
}

export default LatestRequests