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

### Differential cryptanalysis
• 1990 Biham and Shami invented a new crypto attack (differential cryptography) and published a paper on their new technique

• the method attempts to discover non-random behaviour by changing the input and exploiting this to recover the key – successful against many ciphers in common use, but not DES!

### DES details
• DES uses a combination of **permutation** (scramble bits – easy in hardware) and **substitution** (table look-up)

• the permutation uses a **‘P box’** (32 inputs, 32 outputs)

• the substitution uses an **‘Sbox’**
(6-bit input, 4-bit output)
(in fact 8 S-boxes are used in parallel)

• the algorithm is a **Feistel cipher** (after Horst Feistel), used in many block ciphers (but not AES)

### Feistel cipher algorithm
• split the block into two : for DES, we have a 64-bit ‘P’ block which gives a 32-bit ‘L’ block and a 32-bit ‘R’ block

• use R and the key K to produce a 32-bit ‘M’ block (details later)

• generate L* from L XOR M

• note R is unchanged at this point.

• swap the two blocks:setL=R,setR=L*

• repeat for a number of iterations (or rounds) (16 for DES)

• decryption simply works backwards: the final R is unchanged, hence the final M block can be re-created and XOR’d with the final L to give the previous R.

• the 56-bit key K is expanded into 16 48-bit subkeys (one per round) (key bits are simply re- used with an (over-)complex scheme)

• the 32-bit R block is expanded into 48-bitsand XOR’d with the subkey

•the 48-bit result is split into 8 sets of 6-bits,these are the inputs to the S-boxes

•the 8*4=32-bit outputs go through the P-box

• the output of the P-box is the M-block

• the S and P boxes are unchanged between rounds

• the S-box provides a ‘one-way’ function: the 4-bit output could have come from any of four different 6-bit inputs

• compare the S-box function with hashing (N:1 mapping)

• decryption simply goes backwards

• (N.B. XOR reverses the original changes)
