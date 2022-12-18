import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MovieDiv = () => {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.apiUrl}`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const Search = async (event) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.apiUrl}&t=${event.target.value}`
      );
      setData(res.data);
      console.log(res.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <Box p="50px">
      <h2>Search</h2>
      <Input onChange={Search} className="search-input" />
      <div>
        <Row gutter={12}>
          <Col xl={6} lg={6} sm={12} xs={6}>
            <div style={{marginTop:'7px'}}>
              {loading ? (
                <div>
                  <Skeleton className="skeleton" />
                </div>
              ) : error ? (
                <div>
                  <h1>Something went wrong. Please refresh</h1>
                </div>
              ) : (
                <div>
                  <Text fontWeight="bold" width="300px">
                    {data.Genre}
                  </Text>
                  <Flex
                    bgColor="#000"
                    borderRadius="5px"
                    width="200px"
                    justifyContent="center"
                    height="200px"
                  >
                    <Center color="#fff">{data.Title ? data.Title : data.Error}</Center>
                  </Flex>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Box>
  );
};

export default MovieDiv;
