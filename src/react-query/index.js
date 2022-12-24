import { useQuery, useMutation } from '@tanstack/react-query'
import { getProductById, getProducts, getReserves, getFeedbacks, getNewposts, getProductThree} from "../api";
import { useDispatch } from "react-redux";
import { setUser } from '../redux/usersSlice';

export const useProducts = (url) => {
   // registerWithEmailPassword
   // const { data, isLoading } = useQuery([url], getProducts)
   // return { data, isLoading };

   const { data, isLoading, isError, isSuccess } = useQuery([url], getProducts);
   return { data, isLoading, isError, isSuccess };
};

export const useProductById = (productId) => {
   // const { data, isLoading } = useQuery([productId], getProductById)
   // return { data, isLoading };

   const { data, isLoading, isError, isSuccess } = useQuery(
      [productId],
      getProductById
   );
   return { data, isLoading, isError, isSuccess };
};


export const useReserve = () => {
   const dispatch = useDispatch();
   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(getReserves, {
      onSuccess: (data) => dispatch(setUser(data.data))
   });
   return { mutate, isLoading, isSuccess, isError, data, error, status };
}

export const useFeedback = () => {
   const dispatch = useDispatch();
   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(getFeedbacks, {
      onSuccess: (data) => dispatch(setUser(data.data))
   });
   return { mutate, isLoading, isSuccess, isError, data, error, status };
}


export const useNewposts = (url) => {
   const { data, isLoading, isError, isSuccess } = useQuery([url], getNewposts);
   return { data, isLoading, isError, isSuccess };
};

export const useProductThree = (url) => {
   const { data, isLoading, isError, isSuccess } = useQuery([url], getProductThree);
   return { data, isLoading, isError, isSuccess };
};