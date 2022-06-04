import React from 'react'
import '../styles/Internships.css'
import Card from 'react-bootstrap/Card';

function InternshipsBtn(){

  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/Internships")}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.ytimg.com/vi/mRf3-JkwqfU/mqdefault.jpg" />
  <Card.Body>
    <Card.Title>Internships</Card.Title>
    <Card.Text>
      Find your dream internship here.
    </Card.Text>
  </Card.Body>
</Card>
        </button>
    </div>
  )
}
export default InternshipsBtn;