import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      // no whitelist, os reducers que precisam manter info
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
