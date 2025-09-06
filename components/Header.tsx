import { Address, Avatar, EthBalance, Identity, Name } from "@coinbase/onchainkit/identity";
import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect } from "@coinbase/onchainkit/wallet";
import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center mb-3 h-11">
            <div>
                <div className="flex items-center space-x-2">
                    <Wallet className="z-10">
                        <ConnectWallet>
                            <Name className="text-inherit" />
                        </ConnectWallet>
                        <WalletDropdown>
                            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                                <Avatar />
                                <Name />
                                <Address />
                                <EthBalance />
                            </Identity>
                            <WalletDropdownDisconnect />
                        </WalletDropdown>
                    </Wallet>
                </div>
            </div>
        </header>
    );
};

export default Header;
