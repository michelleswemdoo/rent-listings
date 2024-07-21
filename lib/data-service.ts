import { axiosInstance } from '@/config/axios';
import type { Lists, Property } from '../types';

type Sort = { direction?: string; field?: string };

type GetListingsQueryParams = {
  limit?: number;
  offset?: number;
  status?: Array<string>;
  postal_code?: string;
  sort?: Sort;
};

export const getListings = async (
  params: GetListingsQueryParams,
): Promise<Lists | undefined> => {
  try {
    const response = await axiosInstance.post('/properties/v3/list', params);
    return response?.data?.data?.home_search;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return undefined;
  }
};

export const getProperty = async (
  property_id: string,
): Promise<Property | undefined> => {
  try {
    const response = await axiosInstance.get(
      `/properties/v3/detail?property_id=${property_id}`,
    );

    return response?.data?.data?.home;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return undefined;
  }
};
