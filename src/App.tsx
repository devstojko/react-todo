import React from 'react';

interface Props {
  children: React.ReactNode;
}

const App = ({ children }: Props) => {
  return <iv>{children}<div>;
};

export default App;
