import { Helmet } from 'react-helmet';

export const LandingPage = () => (
  <>
    <Helmet>
      <title>Landing</title>
    </Helmet>
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <div className="w-1/2 h-full pt-4">
        React Template Project
      </div>
    </div>
  </>
);
