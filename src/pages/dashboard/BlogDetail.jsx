import React from "react";
import { Col, Container, Row, Button } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import CustomNavbar from "../../components/common/Navbar/CustomNavbar";

const BlogDetail = () => {
  const location = useLocation();
  const history = useNavigate();
  const { thumbnailUrl, title, url } = location.state;
  return (
    <div>
      <CustomNavbar title="Blog Detail" />
      <Button className="marginTop30 marginLeft30" onClick={() => history("/dashboard")}>
          Back
        </Button>
      <Container className="marginTop30 flex justifyCenter">
        <Row>
          <Col>
            <img src={thumbnailUrl} />
          </Col>
          <Col>{title}</Col>
          {url}
        </Row>
     
      </Container>
    </div>
  );
};
export default BlogDetail;
