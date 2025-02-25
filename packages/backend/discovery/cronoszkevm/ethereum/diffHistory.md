Generated with discovered.json: 0x87ece57be9c4c765e7d3656e3fbcff36d397e2ca

# Diff at Wed, 02 Oct 2024 07:13:23 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@97b544adfba04e970ecc4cdd40ee3ff679944269 block: 20862570
- current block number: 20876242

## Description

upgradeChainFromVersion() called, upgrading to protocol version 103079215106. This is the latest version used by ZKsync Era, effectively bringing no changes for CronosZkEvm since the postUpgradeCalldata is empty and the diamond implementations are the same as last version. (Era used this upgrade to change an admin) Upgrader role is given to the old Admin EOA (no net perm changes).

## Watched changes

```diff
    contract CronosZkEVMAdmin (0x6a88E8f6B5382d87F39213eB3df43c5FF2498Dd4) {
    +++ description: None
      values.accessControl.UPGRADER.members.2:
+        "0xC774CDFc4d2AcE7aaD12D77B6A3752a393E1ab8b"
    }
```

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      values.$pastUpgrades.2:
+        ["2024-10-02T06:36:11.000Z",["0xF6F26b416CE7AE5e5FE224Be332C7aE4e1f3450a","0xE60E94fCCb18a81D501a38959E532C0A85A1be89","0xCDB6228b616EEf8Df47D69A372C4f725C43e718C","0xaD193aDe635576d8e9f7ada71Af2137b16c64075"]]
      values.$upgradeCount:
-        2
+        3
+++ description: Protocol version, increments with each protocol change
+++ severity: MEDIUM
      values.getProtocolVersion:
-        103079215105
+        103079215106
      values.getSemverProtocolVersion.2:
-        1
+        2
    }
```

Generated with discovered.json: 0x94fa59118b88752205637a2b6454460d2c28b0da

# Diff at Tue, 01 Oct 2024 10:50:30 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20862570
- current block number: 20862570

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20862570 (main branch discovery), not current.

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-07-30T16:30:35.000Z",["0xF6F26b416CE7AE5e5FE224Be332C7aE4e1f3450a","0xE60E94fCCb18a81D501a38959E532C0A85A1be89","0xCDB6228b616EEf8Df47D69A372C4f725C43e718C","0xaD193aDe635576d8e9f7ada71Af2137b16c64075"]],["2024-07-30T16:30:35.000Z",["0xF6F26b416CE7AE5e5FE224Be332C7aE4e1f3450a","0xE60E94fCCb18a81D501a38959E532C0A85A1be89","0xCDB6228b616EEf8Df47D69A372C4f725C43e718C","0xaD193aDe635576d8e9f7ada71Af2137b16c64075"]]]
      values.$upgradeCount:
+        2
    }
```

Generated with discovered.json: 0xab96172d00f6f2326ada7aab90076ea973d78e84

# Diff at Mon, 30 Sep 2024 09:28:14 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@eec6993b988ab9a9f325d04da2e9717ed24ad0b9 block: 20777184
- current block number: 20862570

## Description

CronosZkEVMAdmin upgrade: New IChainAdmin interface with multicall ability, thus fully inheriting the ChainAdmin permissions in the Diamond. Project config updated, transactionFilterer permissions added.

## Watched changes

```diff
-   Status: DELETED
    contract CronosZkEVMAdmin (0x66eF951aEC26987915582340bCAA569E5Be67cDC)
    +++ description: None
```

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      values.getAdmin:
-        "0x66eF951aEC26987915582340bCAA569E5Be67cDC"
+        "0x6a88E8f6B5382d87F39213eB3df43c5FF2498Dd4"
    }
```

```diff
+   Status: CREATED
    contract CronosChainAdminMultisig (0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce)
    +++ description: None
```

```diff
+   Status: CREATED
    contract CronosZkEVMAdmin (0x6a88E8f6B5382d87F39213eB3df43c5FF2498Dd4)
    +++ description: None
```

## Source code changes

```diff
.../.flat/CronosChainAdminMultisig/GnosisSafe.sol  | 953 +++++++++++++++++++++
 .../CronosChainAdminMultisig/GnosisSafeProxy.p.sol |  35 +
 .../{.flat@20777184 => .flat}/CronosZkEVMAdmin.sol |  60 +-
 3 files changed, 1047 insertions(+), 1 deletion(-)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777184 (main branch discovery), not current.

```diff
-   Status: DELETED
    contract CronosChainAdminMultisig (0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce)
    +++ description: None
```

```diff
    contract CronosZkEVMAdmin (0x66eF951aEC26987915582340bCAA569E5Be67cDC) {
    +++ description: None
      values.accessControl:
-        {"DEFAULT_ADMIN_ROLE":{"adminRole":"DEFAULT_ADMIN_ROLE","members":[]},"ADMIN":{"adminRole":"ADMIN","members":["0xfD7a03Cdb68E6488F950108A4d24f15519b87339","0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"]},"ORACLE":{"adminRole":"ADMIN","members":["0xfD7a03Cdb68E6488F950108A4d24f15519b87339","0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"]},"UPGRADER":{"adminRole":"ADMIN","members":["0xfD7a03Cdb68E6488F950108A4d24f15519b87339","0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"]},"FEE_ADMIN":{"adminRole":"ADMIN","members":["0xfD7a03Cdb68E6488F950108A4d24f15519b87339","0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"]}}
    }
```

```diff
    contract TxFiltererOwnerMultisig (0xC774CDFc4d2AcE7aaD12D77B6A3752a393E1ab8b) {
    +++ description: None
      name:
-        "DenyListOwnerMultisig"
+        "TxFiltererOwnerMultisig"
    }
```

Generated with discovered.json: 0x6000c0e91f82353e42d690f3d482b9e384a2c0b3

# Diff at Wed, 18 Sep 2024 11:29:40 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@14dc1d5395aaa4aca4e79a08fd6132e42e3cf1a4 block: 20668550
- current block number: 20777184

## Description

Provide description of changes. This section will be preserved.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20668550 (main branch discovery), not current.

```diff
    contract CronosChainAdminMultisig (0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce) {
    +++ description: None
      name:
-        "AdminMultisig"
+        "CronosChainAdminMultisig"
    }
```

Generated with discovered.json: 0x4af2a68368669c3387c20071a4d0fb5d972fe239

# Diff at Mon, 16 Sep 2024 13:59:08 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bb1c8d62bd8e55be7219cbf896b4a8459c92e616 block: 20668550
- current block number: 20668550

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20668550 (main branch discovery), not current.

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      values.validators.0:
+        "0x5D8ba173Dc6C3c90C8f7C04C9288BeF5FDbAd06E"
    }
```

Generated with discovered.json: 0x5333e854a4b470f861b576eb3371fac75b833932

# Diff at Fri, 23 Aug 2024 07:26:48 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@08f0832a5dea29e7c493cd50bda4bf1729aa03ae block: 20568367
- current block number: 20589800

## Description

Verified the bridge proxy contract.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20568367 (main branch discovery), not current.

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      unverified:
-        true
    }
```

Generated with discovered.json: 0x0c856d0648b71a8d06b5926a3ea8934df46b90ee

# Diff at Tue, 20 Aug 2024 07:33:17 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@5417c4717b5cefeed17cd8419a7eb2dda22d4206 block: 20532448
- current block number: 20568367

## Description

Added discovery of DA mode.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20532448 (main branch discovery), not current.

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      values.daMode:
+        1
    }
```

Generated with discovered.json: 0xa58f80eeae7359035a0c626cbe9fb22ebc0858be

# Diff at Thu, 15 Aug 2024 07:10:34 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@9a07aead4b3726cc622f66fe9a15e06e63af7acd block: 20525613
- current block number: 20532448

## Description

The pending owner now became an actual owner. No pending owner currently.

## Watched changes

```diff
    contract TransactionFiltererDenyList (0xA8998F231a660Eca365B382943c71ad9b7619139) {
    +++ description: None
      values.owner:
-        "0x143524d0ac8D7f35a2133b6B0a7567e0E3393137"
+        "0xC774CDFc4d2AcE7aaD12D77B6A3752a393E1ab8b"
      values.pendingOwner:
-        "0xC774CDFc4d2AcE7aaD12D77B6A3752a393E1ab8b"
+        "0x0000000000000000000000000000000000000000"
    }
```

Generated with discovered.json: 0xf60327b26a1b02b58bfd289f249ed0d4831ec61f

# Diff at Wed, 14 Aug 2024 08:16:16 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@e32dcc268a9af9f45ad205490c9d650c487e04f1 block: 20512726
- current block number: 20525613

## Description

All roles have been revoked from the EOA and a multisig (2/3) has been granted those roles.
A pending owner is added to TransactionFiltererDenyList, which is just a step in their ownership transfer process, it will become the actual owner once the entire process is completed.

## Watched changes

```diff
    contract CronosZkEVMAdmin (0x66eF951aEC26987915582340bCAA569E5Be67cDC) {
    +++ description: None
      values.accessControl.ADMIN.members.1:
-        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
+        "0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"
      values.accessControl.ADMIN.members.0:
-        "0x143524d0ac8D7f35a2133b6B0a7567e0E3393137"
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
      values.accessControl.ORACLE.members.1:
-        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
+        "0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"
      values.accessControl.ORACLE.members.0:
-        "0x143524d0ac8D7f35a2133b6B0a7567e0E3393137"
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
      values.accessControl.UPGRADER.members.1:
-        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
+        "0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"
      values.accessControl.UPGRADER.members.0:
-        "0x143524d0ac8D7f35a2133b6B0a7567e0E3393137"
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
      values.accessControl.FEE_ADMIN.members.1:
-        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
+        "0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce"
      values.accessControl.FEE_ADMIN.members.0:
-        "0x143524d0ac8D7f35a2133b6B0a7567e0E3393137"
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
    }
```

```diff
    contract TransactionFiltererDenyList (0xA8998F231a660Eca365B382943c71ad9b7619139) {
    +++ description: None
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "0xC774CDFc4d2AcE7aaD12D77B6A3752a393E1ab8b"
    }
```

```diff
+   Status: CREATED
    contract AdminMultisig (0x4c57b73435FcB2D60AAf581e44d6a8AFc57ddFce)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DenyListOwnerMultisig (0xC774CDFc4d2AcE7aaD12D77B6A3752a393E1ab8b)
    +++ description: None
```

## Source code changes

```diff
.../ethereum/.flat/AdminMultisig/GnosisSafe.sol    | 952 +++++++++++++++++++++
 .../.flat/AdminMultisig/GnosisSafeProxy.p.sol      |  34 +
 .../.flat/DenyListOwnerMultisig/GnosisSafe.sol     | 952 +++++++++++++++++++++
 .../DenyListOwnerMultisig/GnosisSafeProxy.p.sol    |  34 +
 4 files changed, 1972 insertions(+)
```

Generated with discovered.json: 0xce3cf2924b53d3ff2bfa12c6d3eacfed4b824720

# Diff at Mon, 12 Aug 2024 13:07:34 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@bafa261ae877bba9966845f4d250f5cbb9d4f6d2 block: 20482316
- current block number: 20512726

## Description

A second EOA is given multiple roles, now there are two EOAs with those.

## Watched changes

```diff
    contract CronosZkEVMAdmin (0x66eF951aEC26987915582340bCAA569E5Be67cDC) {
    +++ description: None
      values.accessControl.ADMIN.members.1:
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
      values.accessControl.ORACLE.members.1:
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
      values.accessControl.UPGRADER.members.1:
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
      values.accessControl.FEE_ADMIN.members.1:
+        "0xfD7a03Cdb68E6488F950108A4d24f15519b87339"
    }
```

Generated with discovered.json: 0x5a8ff11be549135c8b8b49f5bff96cb47ab97132

# Diff at Thu, 08 Aug 2024 07:17:33 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@5a17db968badca34a66703637dabf76a313bb43e block: 20469638
- current block number: 20482316

## Description

Updated base token gas multiplier.

## Watched changes

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      values.baseTokenGasPriceMultiplierNominator:
-        40000
+        25000
    }
```

Generated with discovered.json: 0x682e63ce64e58a5524b7f506518c01daf6f57142

# Diff at Thu, 01 Aug 2024 08:25:00 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@295430f331b68784c13ccda9222bc78df1e833c5 block: 20425837
- current block number: 20432488

## Description

Cronoszkevm is still on block 1 (verified).
Local Admin role (see ZKsync Era diagrams) is changed from an EOA to a contract `CronosZkEVMAdmin` which allows for splitting of the Admin's permissions via accessControl. Currently all roles are given to the `0x143524d0ac8D7f35a2133b6B0a7567e0E3393137` EOA.

## Watched changes

```diff
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc) {
    +++ description: None
      values.getAdmin:
-        "0x143524d0ac8D7f35a2133b6B0a7567e0E3393137"
+        "0x66eF951aEC26987915582340bCAA569E5Be67cDC"
      values.getL2SystemContractsUpgradeBatchNumber:
-        1
+        0
      values.getL2SystemContractsUpgradeBlockNumber:
-        1
+        0
      values.getL2SystemContractsUpgradeTxHash:
-        "0xd05d194051ec55ccc2207d19499a7959c87327586d85b0914684b0f3319cbeff"
+        "0x0000000000000000000000000000000000000000000000000000000000000000"
    }
```

```diff
+   Status: CREATED
    contract CronosZkEVMAdmin (0x66eF951aEC26987915582340bCAA569E5Be67cDC)
    +++ description: None
```

## Source code changes

```diff
.../ethereum/.flat/CronosZkEVMAdmin.sol            | 2352 ++++++++++++++++++++
 1 file changed, 2352 insertions(+)
```

Generated with discovered.json: 0x7e266a80639b119ebd450a36cc47e5254bba527a

# Diff at Wed, 31 Jul 2024 10:08:17 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- current block number: 20425837

## Description

Initial discovery:
ZK stack chain in ValidiumMode (`getPubdataPricingMode : 1`) sharing the STM, ValidatorTimelock, Verifier and all diamond facet implementations with ZKsync Era.
DiamondProxy not yet verified which is not really a problem for our discovery?. Admin EOA so far (for the non-shared parts). BaseToken is zkCRO.

## Initial discovery

```diff
+   Status: CREATED
    contract Verifier (0x70F3FBf8a427155185Ec90BED8a3434203de9604)
    +++ description: None
```

```diff
+   Status: CREATED
    contract CronosZkEvm (0x7b2DA4e77BAE0e0d23c53C3BE6650497d0576CFc)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TransactionFiltererDenyList (0xA8998F231a660Eca365B382943c71ad9b7619139)
    +++ description: None
```
