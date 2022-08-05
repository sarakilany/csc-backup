import React, { useEffect, useState } from "react";
import {Card,Col, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import  '../TableDetails/TableDetails.css'
import axios from "axios";


export default function TableDetails() {
  const [users, setUsers] = useState();
    const Per_Page = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const getusersData = async () => {
    let { data } = await axios.get("https://server-csc.herokuapp.com/users");
    setUsers(data);
  };
  useEffect(() => {
    getusersData();
  }, []);

    
      const handlePageClick = ({ selected: selectedPage }) => {
        console.log("selected page ", selectedPage);
        setCurrentPage(selectedPage);
      };

      const offset = currentPage * Per_Page;
      const currentPageData = users.slice(offset, offset + Per_Page);
      const totalPages = Math.ceil(users.length) / Per_Page;


  return (
    <div className='container-fluid'>
        <div className='row'>
         <Col className="p-4 " md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Admins</Card.Title>
                <p className="card-category">check your team data</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Tel</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPageData.map((admin, index) => {
                      return (
                        <>
                          <tr>
                            <td> {admin.id}</td>
                            <td>{admin.name}</td>
                            <td>{admin.tel}</td>
                            <td>{admin.email}</td>
                            <td>{admin.city}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">> "}
              pageCount={totalPages}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination_link"}
              nextLinkClassName={"pagination_link"}
              disabledClassName={"pagination_link_disabled"}
              activeClassName={"pagination_link_active"}
            />
    </div>
    </div>

  )
}
