const { INFURA_KEY, ALCHEMY_MAINNET_KEY } = process.env

export default {
  netId1: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 80,
      fast: 50,
      standard: 25,
      low: 8
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://etherscan.io/tx/',
      address: 'https://etherscan.io/address/',
      block: 'https://etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Ethereum Mainnet',
    deployedBlock: 9116966,
    rpcUrls: {
      Infura: {
        name: 'Infura',
        url: `https://mainnet.infura.io/v3/${INFURA_KEY}`
      },
      Alchemy: {
        name: 'Alchemy',
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_KEY}`
      }
    },
    multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    registryContract: '0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2',
    echoContractAccount: '0x9B27DD5Bb15d42DC224FCD0B7caEbBe16161Df42',
    aggregatorContract: '0xE8F47A78A6D52D317D0D2FFFac56739fE14D1b49',
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc',
          '1': '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936',
          '10': '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF',
          '100': '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291'
        },
        symbol: 'ETH',
        decimals: 18
      }
    },
    ensSubdomainKey: 'mainnet-tornado',
    pollInterval: 15,
    constants: {
      GOVERNANCE_BLOCK: 11474695,
      NOTE_ACCOUNT_BLOCK: 11842486,
      ENCRYPTED_NOTES_BLOCK: 14248730,
      MINING_BLOCK_TIME: 15
    },
    'torn.contract.tornadocash.eth': '0x77777FeDdddFfC19Ff86DB637967013e6C6A116C',
    'governance.contract.tornadocash.eth': '0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce',
    'tornado-router.contract.tornadocash.eth': '0xd90e2f925DA726b50C4Ed8D0Fb90Ad053324F31b',
    'staking-rewards.contract.tornadocash.eth': '0x2FC93484614a34f26F7970CBB94615bA109BB4bf'
  },
  netId56: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 5,
      fast: 5,
      standard: 5,
      low: 5
    },
    nativeCurrency: 'bnb',
    currencyName: 'BNB',
    explorerUrl: {
      tx: 'https://bscscan.com/tx/',
      address: 'https://bscscan.com/address/',
      block: 'https://bscscan.com/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Binance Smart Chain',
    deployedBlock: 8158799,
    multicall: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      publicRpc1: {
        name: 'BSC Public RPC 1',
        url: 'https://bsc-dataseed.binance.org/'
      },
      publicRpc2: {
        name: 'BSC Public RPC 2',
        url: 'https://bsc-dataseed1.defibit.io/'
      },
      publicRpc3: {
        name: 'BSC Public RPC 3',
        url: 'https://bsc-dataseed1.ninicoin.io/'
      }
    },
    tokens: {
      bnb: {
        instanceAddress: {
          '0.1': '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
          '1': '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
          '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD'
        },
        symbol: 'BNB',
        decimals: 18
      }
    },
    ensSubdomainKey: 'bsc-tornado',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 8159269,
      ENCRYPTED_NOTES_BLOCK: 8159269
    },
    'tornado-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  }
}
