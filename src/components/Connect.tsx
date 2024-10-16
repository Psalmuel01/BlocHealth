import {
  ConnectWallet,
  ConnectWalletText,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { base } from "wagmi/chains";
import { useAccount } from "wagmi";

export function WalletConnect() {
  const { address } = useAccount();

  return (
    <div className="flex">
      <Wallet>
        <ConnectWallet className="bg-[#2924A6] hover:bg-blue-800">
          <ConnectWalletText>Connect Wallet</ConnectWalletText>
          <Avatar address={address} chain={base} className="h-6 w-6" />
          <Name address={address} chain={base} className="text-white" />
        </ConnectWallet>
        <WalletDropdown>
          <Identity
            className="px-4 pt-3 pb-2 hover:bg-blue-700"
            hasCopyAddressOnClick
          >
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <WalletDropdownLink
            className="hover:bg-green-200"
            icon="wallet"
            href="https://keys.coinbase.com"
          >
            Wallet
          </WalletDropdownLink>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect className="bg-error/50 hover:bg-error" />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}