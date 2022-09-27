import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../common/enums/enums';

export const Router = () => (
  <Routes>
    <Route path={AppRoute.ROOT} element={<h1>Hello World</h1>} />
  </Routes>
);
