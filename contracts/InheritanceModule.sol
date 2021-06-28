// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.7.0 <0.8.0;

// ** Gnosis Imports
// import "@gnosis.pm/safe-contracts/contracts/base/Module.sol";
// import "@gnosis.pm/safe-contracts/contracts/base/OwnerModule.sol";
import "@gnosis.pm/safe-contracts/contracts/base/OwnerManager.sol";
import "@gnosis.pm/safe-contracts/contracts/common/Enum.sol";
import "@gnosis.pm/safe-contracts/contracts/common/SignatureDecoder.sol";

// ** Interfaces
import "./interfaces/GnosisSafe.sol";

/// @title InheritanceModule
/// @author Richard Meissner - <richard@gnosis.pm>
/// @author Andreas Bigger <bigger@usc.edu>
contract InheritanceModule is OwnerManager, SignatureDecoder {
  string public constant NAME = "Inheritance Module";
  string public constant VERSION = "0.1.0";

  bytes32 public constant DOMAIN_SEPARATOR_TYPEHASH = 0x47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218;
  // keccak256(
  //     "EIP712Domain(uint256 chainId,address verifyingContract)"
  // );

  bytes32 public constant ALLOWANCE_TRANSFER_TYPEHASH = 0x80b006280932094e7cc965863eb5118dc07e5d272c6670c4a7c87299e04fceeb;
  // keccak256(
  //     "AllowanceTransfer(address safe,address token,uint96 amount,address paymentToken,uint96 payment,uint16 nonce)"
  // );

  address[] public inheritants;
  mapping (address => bool) public isInheritant;
  // isExecuted mapping maps data hash to execution status.
  mapping (bytes32 => bool) public isExecuted;

  modifier onlyInheritant() {
      require(isInheritant[msg.sender], "Method can only be called by an inheritant!");
      _;
  }

  /// @dev Setup function sets initial storage of contract.
  /// @param _inheritants List of inheritants' addresses
  function setup(address[] memory _inheritants)
      public
  {
    addOwnerWithThreshold(msg.sender, getThreshold());
    _reconfigure(_inheritants);
  }

  /// @dev Setup function sets initial storage of contract.
  /// @param _inheritants List of inheritants' addresses.
  function reconfigure(address[] memory _inheritants)
      public
      authorized
  {
      for (uint i = 0; i < inheritants.length; ++i) {
          address inheritant = inheritants[i];
          isInheritant[inheritant] = false;
      }
      _reconfigure(_inheritants);
  }

  /// @dev Remove inheritance
  function removeInheritance()
      public
      authorized
  {
      for (uint i = 0; i < inheritants.length; ++i) {
          address inheritant = inheritants[i];
          isInheritant[inheritant] = false;
      }
      inheritants = new address[](0);
  }

  /// @dev Setup function sets initial storage of contract.
  /// @param _inheritants List of inheritants' addresses.
  function _reconfigure(address[] memory _inheritants)
      internal
  {
      // Set allowed inheritants.
      for (uint256 i = 0; i < _inheritants.length; i++) {
          address inheritant = _inheritants[i];
          require(inheritant != address(0), "Invalid inheritant address provided");
          require(!isInheritant[inheritant], "Duplicate inheritant address provided");
          isInheritant[inheritant] = true;
      }
      inheritants = _inheritants;
  }



  function isSafeInactive() private view returns (bool) {
  // ** Get current timestamp
    // solium-disable-next-line security/no-block-members
    uint32 timestamp = uint32(block.timestamp);

    // ** Get Gnosis Safe latest transaction or latest message signature

    // ** If greater than x seconds ago, add inheritant as delegate

  }

  /// @dev Returns if Safe transaction is a valid owner replacement transaction.
  /// @param prevOwner Owner that pointed to the owner to be replaced in the linked list
  /// @param oldOwner Owner address to be replaced.
  /// @param newOwner New owner address.
  function inherit(GnosisSafe safe, address prevOwner, address oldOwner, address newOwner)
      public
      onlyInheritant
  {
      bytes memory data = abi.encodeWithSignature("swapOwner(address,address,address)", prevOwner, oldOwner, newOwner);
      bytes32 dataHash = getDataHash(data);
      require(!isExecuted[dataHash], "Inheritance already executed.");
      require(isSafeInactive(), "Active safe! Inheritance disallowed.");
      isExecuted[dataHash] = true;
      require(safe.execTransactionFromModule(address(safe), 0, data, Enum.Operation.Call), "Could not execute inheritance");
  }

  /// @dev Returns hash of data encoding owner replacement.
  /// @param data Data payload.
  /// @return Data hash.
  function getDataHash(bytes memory data)
      public
      pure
      returns (bytes32)
  {
      return keccak256(data);
  }
}
