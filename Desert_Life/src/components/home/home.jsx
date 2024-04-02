import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { API_Link } from "../../api/api";

import Masthead from "../masthead/masthead";
import CompanyInfo from "../companyInfo/companyInfo";
import Features from "../features/features";
import UserTestimoi from "../userTestimoni/userTestimoni";
import RecommendedSection from "../recommendedSection/recommendedSection";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mastheadData, setMastheadData] = useState(null);
  const [companyInfoData, setCompanyInfoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_Link}/slider`);
        const companyData = await axios.get(`${API_Link}/home`);

        setCompanyInfoData(companyData.data);
        setMastheadData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <ClipLoader color="#36d7b7" className="loader" />
        </div>
      ) : (
        <>
          <Masthead data={mastheadData} />
          <CompanyInfo data={companyInfoData} />
          <Features />
          {/* <ProductScreenShot /> */}
          {/* <PackegSection /> */}
          {/* <FreeTrailSection /> */}
          <RecommendedSection />
          <UserTestimoi />
        </>
      )}
    </>
  );
};

export default Home;
