import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INetwork, INetworkState, Network, Token } from '../../types';

const initialState: INetworkState = {
  name: Network.MainNet,
  algodNetwork: {
    port: '',
    server: 'https://mainnet-algorand.api.purestake.io/ps2',
    token: { 'x-api-key': process.env.NEXT_PUBLIC_PURESTAKE_API_KEY } as Token,
  },
  indexerNetwork: {
    port: '',
    server: 'https://algoindexer.algoexplorerapi.io',
    token: '',
  },
};

export const networkSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNetwork: (state: INetworkState, action: PayloadAction<Network>) => {
      console.log('New network', action.payload);
      switch (action.payload) {
        case Network.MainNet:
          state.algodNetwork = {
            port: '',
            server: 'https://mainnet-algorand.api.purestake.io/ps2',
            token: {
              'x-api-key': process.env.NEXT_PUBLIC_PURESTAKE_API_KEY,
            } as Token,
          };
          state.indexerNetwork = {
            port: '',
            server: 'https://algoindexer.algoexplorerapi.io',
            token: '',
          };
          break;
        case Network.TestNet:
          state.name = Network.TestNet;
          state.algodNetwork = {
            port: '',
            server: 'https://testnet-algorand.api.purestake.io/ps2',
            token: {
              'x-api-key': process.env.NEXT_PUBLIC_PURESTAKE_API_KEY,
            } as Token,
          };
          state.indexerNetwork = {
            port: '',
            server: 'https://algoindexer.testnet.algoexplorerapi.io',
            token: '',
          };
          break;
        case Network.BetaNet:
          state.name = Network.BetaNet;
          state.algodNetwork = {
            port: '',
            server: 'https://betanet-algorand.api.purestake.io/ps2',
            token: {
              'x-api-key': process.env.NEXT_PUBLIC_PURESTAKE_API_KEY,
            } as Token,
          };
          state.indexerNetwork = {
            port: '',
            server: 'https://algoindexer.betanet.algoexplorerapi.io',
            token: '',
          };
          break;
        case Network.Sandbox:
          state.name = Network.Sandbox;
          state.algodNetwork = {
            port: 4000,
            fullServer: 'http://localhost:4000/sandbox/algod',
            server: 'http://localhost/sandbox/algod',
            token: { 'x-key': '709a4b2e-bcbc-40a0-9432-683e6a683842' },
          };
          state.indexerNetwork = {
            port: 4000,
            fullServer: 'http://localhost:4000/sandbox/indexer',
            server: 'http://localhost/sandbox/indexer',
            token: { 'x-key': '709a4b2e-bcbc-40a0-9432-683e6a683842' },
          };
          break;
      }
    },
  },
});

export const { setNetwork } = networkSlice.actions;

export default networkSlice.reducer;
