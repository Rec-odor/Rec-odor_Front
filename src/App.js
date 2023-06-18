import GlobalStyle from './components/GlobalStyle.js';

import Home from './pages/Home.js';
import ProductList from './pages/ProductList.js';
import BrandList from './pages/BrandList.js';
import FindFavor from './pages/FindFavor.js';
import DetailPage from './pages/DetailPage.js';

// import SurveyQuest_1 from './pages/surveyPages/SurveyQuest_1.js';
// import SurveyQuest_2 from './pages/surveyPages/SurveyQuest_2.js';
// import SurveyQuest_3 from './pages/surveyPages/SurveyQuest_3.js';
// import SurveyQuest_4 from './pages/surveyPages/SurveyQuest_4.js';
// import SurveyQuest_5 from './pages/surveyPages/SurveyQuest_5.js';

import Result16 from './pages/resultpage/Result16.js';
import Result22 from './pages/resultpage/Result22.js';
import Result34 from './pages/resultpage/Result34.js';

import { Routes, Route } from 'react-router-dom';
import MyPage from './pages/MyPage.js';
import WishList from './pages/WishList.js';
import SearchPage from './pages/SearchPage.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/brand" element={<BrandList />} />
        <Route path="/findfavor" element={<FindFavor />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/products/:dataId" element={<DetailPage />} />

        {/* <Route path="/survey-question-1" element={<SurveyQuest_1 />} />
        <Route path="/survey-question-2" element={<SurveyQuest_2 />} />
        <Route path="/survey-question-3" element={<SurveyQuest_3 />} />
        <Route path="/survey-question-4" element={<SurveyQuest_4 />} />
        <Route path="/survey-question-5" element={<SurveyQuest_5 />} /> */}

        <Route path="/survey-result-16" element={<Result16 />} />
        <Route path="/survey-result-22" element={<Result22 />} />
        <Route path="/survey-result-34" element={<Result34 />} />
      </Routes>
    </>
  );
}

export default App;
