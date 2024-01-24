import Head from "next/head";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MessageBoardTable from "@/components/MessageBoardTable";


export default function Home() {
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
                <MessageBoardTable />
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
