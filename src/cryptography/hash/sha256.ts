class SHA256 {
  private init: number[] = [];

  private key: number[] = [];

  private frac = (x: number): number => {
    return ((x - Math.floor(x)) * 0x100000000 | 0 );
  }

  public precompute = () => {
    let i = 0, prime = 2, factor, isPrime;

    for (i; i < 64; prime++) {
      isPrime = true;
      for (factor = 2; factor * factor <= prime; factor++) {
        if (prime % factor === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        if (i < 8) {
          this.init[i] = this.frac(Math.pow(prime, 1/2));
        }

        this.key[i] = this.frac(Math.pow(prime, 1/3));
        i++;
      }
    }
  }

  public getKey = () => {
    console.log(this.key);
  }

  public getInit = () => {
    console.log(this.init);
  }
}

const sha256 = new SHA256();

sha256.precompute();

sha256.getKey();

sha256.getInit();