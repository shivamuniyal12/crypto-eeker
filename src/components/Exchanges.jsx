import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useGetExchangesQuery } from '../services/cryptoApi2'
import Loader from './Loader';
const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data;
  console.log(data);
  if (isFetching) return <Loader />;
  return (
    <>
      <Row>
        <Col  style={{textAlign: 'center '}}  span={6}><strong>Exchanges</strong></Col>
        <Col  style={{textAlign: 'center '}}  span={6}><strong>24h Trade Volume</strong></Col>
        <Col  style={{textAlign: 'center '}}  span={6}><strong>Official Site</strong></Col>
        <Col  style={{textAlign: 'center '}}  span={6}><strong>Trust Score</strong></Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
                  <Row style={ {margin: 30}} key={exchange.trust_score_rank}>
                    <Col span={6}>
                      <Text><strong>{exchange.trust_score_rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.image} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col  style={{textAlign: 'center '}} span={6}>${millify(exchange.trade_volume_24h_btc_normalized)}</Col>
                    <Col  style={{textAlign: 'center '}} span={6}><a href={exchange.url} target="_blank">{exchange.id}</a></Col>
                    <Col  style={{textAlign: 'center '}} span={6}>{millify(exchange.trust_score)}</Col>
                  </Row>

          </Col>
        ))}
      </Row>
    </>
  );
};
export default Exchanges;