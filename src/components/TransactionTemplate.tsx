import CONTRACT_ABI from "@/utils/abi";
import { CONTRACT_ADDRESS } from "@/utils/constants";
import {
  Transaction,
  TransactionButton,
  TransactionToast,
  TransactionToastIcon,
  TransactionToastLabel,
  TransactionToastAction,
} from "@coinbase/onchainkit/transaction";
import { TransactionDefaultReact } from "node_modules/@coinbase/onchainkit/esm/transaction/types";

interface ITransactionTemplate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any[];
  functionName: string;
  text?: string;
}

function TransactionTemplate({
  calls,
  capabilities,
  chainId,
  className,
  disabled,
  onError,
  onStatus,
  onSuccess,
  args,
  functionName,
  text,
}: TransactionDefaultReact & ITransactionTemplate) {
  return (
    <Transaction
      calls={calls}
      capabilities={capabilities}
      chainId={chainId}
      className={className}
      contracts={[
        {
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          functionName,
          //@ts-ignore
          args: args.length > 0 ? args : [],
        },
      ]}
      onError={onError}
      onStatus={onStatus}
      onSuccess={onSuccess}
    >
      <TransactionButton disabled={disabled} text={text} />
      <TransactionToast>
        <TransactionToastIcon />
        <TransactionToastLabel />
        <TransactionToastAction />
      </TransactionToast>
    </Transaction>
  );
}

export default TransactionTemplate;
