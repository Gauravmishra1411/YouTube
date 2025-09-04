 import './App.css';
import Header from "./Componet/Header";
import Body from './Componet/Body';
import { Provider } from 'react-redux';
import store from './util/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Componet/MainContainer';
import WatchVedio from './Componet/WatchVedio';
import ButtonList from "./Componet/ButtonList"

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement:<ButtonList/>,
    
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch/:id",
        element: <WatchVedio/>
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={AppRouter} />
    </Provider>
  );
}

export default App;
