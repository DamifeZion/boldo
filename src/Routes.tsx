import * as React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import { routeConstants } from './constants/route-const';
import { NotFound } from './components/not-found';
import { Navbar } from './components/navbar/navbar';
import { NewsLetter } from './components/newsletter';
import { Footer } from './components/footer';
import { LoadingFallback } from './components/loading-fallback';

// Lazy-loaded components
const About = React.lazy(() => import("@/pages/About"));


const Routes = () => {

   return (
      <React.Fragment>
         <Navbar />

         <React.Suspense fallback={<LoadingFallback />}>
            <Router>
               {/* Redirect home route to about */}
               <Route
                  index
                  element={<Navigate to={routeConstants.about} />}
               />

               <Route
                  path={routeConstants.about}
                  element={<About />}
               />

               {/* 404 Not Found Route */}
               <Route
                  path='*'
                  element={<NotFound />}
               />
            </Router>
         </React.Suspense>

         <NewsLetter />
         <Footer />
      </React.Fragment>
   )
}

export default Routes;