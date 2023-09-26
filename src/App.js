import { Provider } from 'react-redux';
import './App.css';
import Body from './Body';
import Head from './Head';
import store from './utils/store';
import{ createBrowserRouter,RouterProvider}  from "react-router-dom"
import MainContainer from './MainContainer';
import WatchPage from './WatchPage';
function App() {

  const appRouter=createBrowserRouter([{
    path:"/",
    element :<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>}
      ,{
        path:"/watch/:id",
        element:<WatchPage/>}
    ]

}])
  return (
    <Provider store={store}>   
  <Head></Head>
  <RouterProvider router={appRouter}/>

  </Provider>

  );
}

export default App;
