import Head from "next/head";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import MessageBoardTable from "@/components/MessageBoardTable";
import App from "@/components/App";
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

export async function getStaticProps() {

  let jsonData;

  try {
    const { data } =
      await axios.get(`${process.env.NEXT_PUBLIC_HOST}/v1/messages`);
    jsonData = data;
    } catch (error) {
      console.log('API Error: ' + error);
    }
    return {
      props: {
        jsonData
      }
    }
  }

export default function Home({jsonData}) {
  return (
    <>
      <Head>
        <title>Message Board</title>
        <meta name="description" content="Message Board Form and Table app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Row>
            <Col xs={12} lg={8}>
                <Header />
            </Col>
        </Row>
        <Row>
            <Col xs={12} lg={8}>
                <App jsonData={jsonData}/>
            </Col>
        </Row>
            <Row>
            <Col xs={12} lg={8}>
                <Footer />
            </Col>
          </Row>
    </Container>
    </>
  );
}
