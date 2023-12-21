import { Box } from '@mui/material';
import Header from './components/Header';

const App = ({ children }) => {
  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center" sx={{ margin: 5 }}>
        {children}
      </Box>
    </>
  );
}

export default App;
