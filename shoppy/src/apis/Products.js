import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  return useQuery(
    ['products'],
    async () =>
      await fetch('/data/products.json')
        .then((res) => res.json())
        .then((data) => data.products),
    {
      staleTime: 1000 * 60,
    }
  );
}
