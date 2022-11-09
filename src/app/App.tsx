import { RouterProvider } from 'react-router-dom';
import { router } from 'pages/Routing';
import { useAppDispatch } from 'shared/hooks';
import { fetchItems } from 'shared/api/api';
import { useEffect } from 'react';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const getItems = async () => {
    dispatch(fetchItems());
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getItems();
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
