# Elementary Cryptography
## Basic Terminology
• plaintext - P or P/T

• ciphertext-C or C/T

• key–K

• encryption (or enciphering) P C
C = E (K, P)

• decryption (or deciphering) C P

• P=D(K,C)henceP*=D(K,E(K,P))

## Symmetric Encryption
• same key used for encrypting and decrypting 

• straightforwardimplementation,fastoperation 

• onekey,knowntosenderandrecipient

• examples: DES, 3DES, AES

# Asymmetric Encryption
• two types of keys: private and public

• private key kept secret by owner, public key is distributed to whoever needs it (i.e. not secret)

• encryption by public key, decryption by private key (or vice versa –, explained later)

• slower algorithm compared with symmetric encryption (example - RSA)


## Stream and Block Ciphers
• stream cipher – converts one symbol of P/T at a time

• block cipher – converts a group of P/T symbols together (typically 64 bits, 128 bits or longer)

## Confusion and Diffusion
• confusion: complex relationship between P/T and C/T
• diffusion: spread changes in P/T over C/T

• (typically stream cipher has low diffusion, block cipher high diffusion)

## Data Encryption Standard(DES)
• IBM design (from earlier work on Lucifier)

• block cipher: 64-bit block, 56-bit key

• finally replaced by AES in 2002 (Advanced Encryption Standard)

• Note that the algorithm was published

• P=64bits,K=56bits,C=64bits

### Kerckhoff’s principle
“A cryptosystem must be secure even if everything about the system (apart from the key) is public knowledge”

### ‘Brute Force’ Attack
• assume a ‘known plaintext’ attack (i.e. the P/T and the resulting C/T are both known)

• the key can always be recovered by an exhaustive search of the entire key space 

000000000000000.......0

000000000000000.......1 etc

up to 

111111111111111.......1

• DES has 2^56 possible keys ( 7 10^16)

### DES ‘Cracker’
• 56 bits requires 2^56 (or 72 10^15) tests

• focus of security attacks shifts to obtaining keys

• for entire space:key will be found on average after testing half the keys

• assume 1 million(10^6) test every second

• 31 10^6 seconds in a year, hence an exhaustive search would require 2000 years.

DES no longer secure
• the limited 56-bit key length is the reason DES had to be replaced by AES: the minimum AES key size is 128 bits

• still no real algorithmic weakness known in DES after more than 30 years study...