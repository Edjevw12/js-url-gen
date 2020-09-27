class QualifierValue {
  values: unknown[] = [];
  delimiter = ':'; // {value}{delimiter}{value}...

  /**
   *
   * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
   */
  constructor(qualifierValue?: QualifierValue | QualifierValue[] | unknown[] | string | number) {
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }

  /**
   * @description Joins the provided values with the provided delimiter
   */
  toString(): string {
    return this.values.join(this.delimiter);
  }

  /**
   * @description Checks if the provided argument has a value
   * @param {any} v
   * @private
   * @return {boolean}
   */
  private hasValue(v:unknown): boolean {
    return typeof v !== 'undefined' && v !== null && v !== '';
  }

  /**
   * @desc Adds a value for the this qualifier instnace
   * @param value
   * @return {this}
   */
  addValue(value: unknown): this {
    // Append value or array of values
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    // Remove falsy values
    this.values = this.values.filter((v) => this.hasValue(v));

    return this;
  }

  /**
   * @description Sets the delimiter for this instance
   * @param delimiter
   */
  setDelimiter(delimiter: string): this {
    this.delimiter = delimiter;

    return this;
  }
}

export default QualifierValue;