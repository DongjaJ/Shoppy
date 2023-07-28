import { useAuthContext } from '../context/AuthContext';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart, getCart, removeFromCart } from '../apis/Firebase';

export default function useCarts() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();

  const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
    enabled: !!uid,
  });

  const addorUpdateItem = useMutation((product) => addToCart(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  return { cartQuery, addorUpdateItem, removeItem };
}
