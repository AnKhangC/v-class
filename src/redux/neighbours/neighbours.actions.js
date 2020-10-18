import { UPDATE } from './neighbours.types';

export const updateNeighboursList = (neighbours) => {
  return {
    type: UPDATE,
    payload: neighbours
  };
};