class DevKits {
  /**
   * Generate a random salt for hashing.
   *
   * @param saltLength - The length of the generated salt.
   * @returns A random salt as a string.
   */
  static createSalt(saltLength: number = 1000): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let salt = "";
    for (let i = 0; i < saltLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      salt += characters.charAt(randomIndex);
    }
    return salt;
  }

  /**
   * Create a hash for a given password using a salt.
   *
   * @param password - The password to be hashed.
   * @param salt - The salt to be used in the hash.
   * @returns The hashed password as a string.
   */
  static createHashPassword(password: string, salt: string): string {
    let hash = password + salt;
    const hashBuffer = Buffer.from(hash, "utf8");
    hash = hashBuffer.toString("base64");
    return hash;
  }

  /**
   * Compare a plain text password with a hashed password.
   *
   * @param password - The plain text password.
   * @param hashedPassword - The hashed password with salt.
   * @returns True if the passwords match, false otherwise.
   */
  static compareHashedPassword(password: string, hashedPassword: string): boolean {
    const [salt, originalHash] = hashedPassword.split("ç");
    const computedHash = this.createHashPassword(password, salt);
    return computedHash === originalHash;
  }
}