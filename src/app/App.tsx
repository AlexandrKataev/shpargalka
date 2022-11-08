import { RouterProvider } from 'react-router-dom';
import { router } from 'pages/Routing';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
