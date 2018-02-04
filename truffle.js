module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      network_id: "*",
      host: "127.0.0.1",
      port: 8545,   // Different than the default below
      gas: 6712388,
      gasPrice: 65000000000,
    }
  },
  rpc: {
    host: "127.0.0.1",
    port: 8545
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }

};
