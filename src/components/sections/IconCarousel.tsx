'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Category = keyof typeof categories;

const categories = {
  'Smart Contracts': [
    { name: 'OpenZeppelin', src: '/assets/images/tools/smartcontracts/openzeppelin.webp' },
    { name: 'Alchemy', src: '/assets/images/tools/smartcontracts/alchemy.webp' },
    { name: 'Ganache', src: '/assets/images/tools/smartcontracts/ganache.webp' },
    { name: 'OpenSea', src: '/assets/images/tools/smartcontracts/opensea.webp' },
    { name: 'Kaleido', src: '/assets/images/tools/smartcontracts/kaleido.webp' },
    { name: 'BuildGuild', src: '/assets/images/tools/smartcontracts/buildguild.webp' },
    { name: 'NFTify', src: '/assets/images/tools/smartcontracts/nftify.webp' },
    { name: 'Brownie', src: '/assets/images/tools/smartcontracts/brownie.webp' },
    { name: 'MythX', src: '/assets/images/tools/smartcontracts/mythx.webp' },
    { name: 'Tenderly', src: '/assets/images/tools/smartcontracts/tenderly.webp' },
    { name: 'HardHat', src: '/assets/images/tools/smartcontracts/hardhat.webp' },
    { name: 'Solang', src: '/assets/images/tools/smartcontracts/solang.webp' },
    { name: 'Solvm', src: '/assets/images/tools//smartcontracts/solvm.webp' },
    { name: 'Pinata', src: '/assets/images/tools/smartcontracts/pinata.webp' },
  ],
  'Programming Languages': [
    { name: 'Vyper', src: '/assets/images/tools/programminglanguages/vyper.webp' },
    { name: 'C++', src: '/assets/images/tools/programminglanguages/cplusplus.webp' },
    { name: 'Python', src: '/assets/images/tools/programminglanguages/python.webp' },
    { name: 'Solidity', src: '/assets/images/tools/programminglanguages/solidity.webp' },
    { name: 'Typescript', src: '/assets/images/tools/programminglanguages/typescript.webp' },
    { name: 'Golang', src: '/assets/images/tools/programminglanguages/golang.webp' },
    { name: 'Dart', src: '/assets/images/tools/programminglanguages/dart.webp' },
    { name: 'Flutter', src: '/assets/images/tools/programminglanguages/flutter.webp' },
    { name: 'GraphQL', src: '/assets/images/tools/programminglanguages/graphql.webp' },
    { name: 'Javascript', src: '/assets/images/tools/programminglanguages/javascript.webp' },
    { name: 'Rust', src: '/assets/images/tools/programminglanguages/rust.webp' },
    { name: 'Java', src: '/assets/images/tools/programminglanguages/java.webp' },
    { name: 'Ruby', src: '/assets/images/tools/programminglanguages/ruby.webp' },
  ],
  'Frameworks': [
    { name: 'Web3.js', src: '/assets/images/tools/frameworks/web3js.webp' },
    { name: 'React', src: '/assets/images/tools/frameworks/react.webp' },
    { name: 'Anchor', src: '/assets/images/tools/frameworks/anchor.webp' },
    { name: 'Angular', src: '/assets/images/tools/frameworks/angular.webp' },
    { name: 'Node', src: '/assets/images/tools/frameworks/node.webp' },
    { name: 'Wallet Connect', src: '/assets/images/tools/frameworks/walletconnect.webp' },
    { name: 'Vue', src: '/assets/images/tools/frameworks/vue.webp' },
    { name: 'Truffle', src: '/assets/images/tools/frameworks/truffle.webp' },
    { name: 'Foundry', src: '/assets/images/tools/frameworks/foundry.webp' },
    { name: 'Firebase', src: '/assets/images/tools/frameworks/firebase.webp' },
    { name: 'Express', src: '/assets/images/tools/frameworks/express.webp' },
    { name: 'Ethers.js', src: '/assets/images/tools/frameworks/ethersjs.webp' },
    { name: 'Next', src: '/assets/images/tools/frameworks/next.webp' },
  ],
  'Databases': [
    { name: 'CouchDB', src: '/assets/images/tools/databases/couchdb.webp' },
    { name: 'The Graph', src: '/assets/images/tools/databases/thegraph.webp' },
    { name: 'Mongo DB', src: '/assets/images/tools/databases/mongodb.webp' },
    { name: 'PostgreSQL', src: '/assets/images/tools/databases/postgresql.webp' },
    { name: 'Orbit DB', src: '/assets/images/tools/databases/orbitdb.webp' },
    { name: 'IPFS', src: '/assets/images/tools/databases/ipfs.webp' },
    { name: 'Hasura', src: '/assets/images/tools/databases/hasura.webp' },
    { name: 'Fluree', src: '/assets/images/tools/databases/fluree.webp' },
    { name: 'Ceramic Network', src: '/assets/images/tools/databases/ceramicnetwork.webp' },
    { name: 'BigChain DB', src: '/assets/images/tools/databases/bigchaindb.webp' },
    { name: 'Arweave', src: '/assets/images/tools/databases/arweave.webp' },
  ],
  'Wallets': [
    { name: 'Binance', src: '/assets/images/tools/wallets/binance.webp' },
    { name: 'Phantom', src: '/assets/images/tools/wallets/phantom.webp' },
    { name: 'Coinbase', src: '/assets/images/tools/wallets/coinbase.webp' },
    { name: 'Metamask', src: '/assets/images/tools/wallets/metamask.webp' },
    { name: 'Trust Wallet', src: '/assets/images/tools/wallets/trustwallet.webp' },
    { name: 'Rabby Wallet', src: '/assets/images/tools/wallets/rabbywallet.webp' },
    { name: 'OKX', src: '/assets/images/tools/wallets/okx.webp' },
    { name: 'Ledget', src: '/assets/images/tools/wallets/ledger.webp' },
    { name: 'Gnosis', src: '/assets/images/tools/wallets/gnosis.webp' },
    { name: 'Trezor', src: '/assets/images/tools/wallets/trezor.webp' },
  ]
} as const;

export default function IconCarousel() {
  const [activeCategory, setActiveCategory] = useState<Category>('Smart Contracts');
  const icons = categories[activeCategory];

  return (
    <section className="bg-black py-24 text-white relative overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">Best-in-Class Tech & Tools</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Shaping tomorrow with industry-leading technologies in a rapidly evolving ecosystem.
        </p>
      </div>

      <div className="flex justify-center gap-10 mb-12 flex-wrap">
        {(Object.keys(categories) as Category[]).map((cat) => (
          <button
            key={cat}
            onMouseEnter={() => setActiveCategory(cat)}
            className={clsx(
              'text-lg font-semibold border-b-2 transition-all px-2',
              activeCategory === cat ? 'text-white border-secondary' : 'text-gray-500 border-transparent'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-max gap-12 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...icons, ...icons].map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-32 h-32 group"
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="aspect-square w-20 object-contain transition duration-300"
              />
              <p className="mt-3 text-sm text-white">{icon.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}