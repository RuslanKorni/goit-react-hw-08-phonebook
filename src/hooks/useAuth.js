import { useSelector } from 'react-redux';
import {
  selectedIsLoggedIn,
  selectedUser,
  selectedIsRefreshing,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const isRefreshing = useSelector(selectedIsRefreshing);
  const user = useSelector(selectedUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
