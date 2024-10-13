import "./hsitory.css";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import HistorySection from "./components/HistorySection";

import AncientHistory from "./components/AncientHistory";

import DetailSection from "./components/DetailSection";

function History() {
  return (
    <>
      <Breadcrumb title="Our History" />
      <HistorySection />
      <AncientHistory />
      <DetailSection />
    </>
  );
}

export default History;
