import * as React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import { routeConstants } from './constants/route-const';
import { NotFound } from './components/not-found';
import { Navbar } from './components/navbar/navbar';
import { NewsLetter } from './components/newsletter';
import { Footer } from './components/footer';
import { LoadingFallback } from './components/loading-fallback';


const About = React.lazy(() => import("@/pages/About"));


const Routes = () => {

   return (
      <React.Suspense fallback={<LoadingFallback />}>
         <Navbar />

         <Router>
            <Route
               index
               path={routeConstants.home}
               element={<Navigate to={routeConstants.about} />}
            />

            <Route
               index
               path={routeConstants.about}
               element={<About />}
            />

            <Route
               path='*'
               element={<NotFound />}
            />
         </Router>

         <NewsLetter />
         <Footer />
      </React.Suspense>
   )
}

export default Routes;