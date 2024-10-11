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
// import { color } from "@coinbase/onchainkit/theme";

export function WalletConnect() {
  return (
    <div className="flex justify-end">
      <Wallet>
        <ConnectWallet className="bg-[#2924A6] hover:bg-blue-800">
          <ConnectWalletText>Sign In</ConnectWalletText>
          <Avatar className="h-6 w-6" />
          <Name className="text-white" />
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