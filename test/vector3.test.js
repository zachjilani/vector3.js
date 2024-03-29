require("module-alias/register")

const expect = require('chai').expect;
const Vector3 = require('@src/vector3');


describe('Vector3', () => {
  it('should add two vectors correctly', () => {
    const vector1 = new Vector3(1, 2, 3);
    const vector2 = new Vector3(4, 5, 6);
    const result = vector1.add(vector2);
    expect(result).to.deep.equal(new Vector3(5, 7, 9));
  });

  it('should subtract two vectors correctly', () => {
    const vector1 = new Vector3(1, 2, 3);
    const vector2 = new Vector3(4, 5, 6);
    const result = vector1.subtract(vector2);
    expect(result).to.deep.equal(new Vector3(-3, -3, -3));
  });

  it('should multiply two vectors correctly', () => {
    const vector1 = new Vector3(3, 4, 5);
    const vector2 = new Vector3(2, 2, 2);
    const result = vector1.mult(vector2);
    //expect(result.equals(new Vector3(6, 8, 10))).to.be.true;
    expect(result).to.deep.equal(new Vector3(6, 8, 10));
  });

  it('should divide two vectors correctly', () => {
    const vector1 = new Vector3(4, 4, 6);
    const vector2 = new Vector3(2, 2, 2);
    const result = vector1.div(vector2);
    expect(result).to.deep.equal(new Vector3(2, 2, 3));
  });

  it('should calculate vectors magnitude correctly', () => {
    const vector1 = new Vector3(2, 3, 4);
    const result = vector1.magnitude()
    expect(result).to.be.closeTo(5.385, 0.001);
  });

  it('should normalize vectors correctly', () => {
    const vector1 = new Vector3(2, 3, 4);
    const result = vector1.normalize();
    expect(result.x).to.be.closeTo(0.371, 0.001);
    expect(result.y).to.be.closeTo(0.557, 0.001);
    expect(result.z).to.be.closeTo(0.742, 0.001);
  });

  it('should calculate distance between two vectors correctly', () => {
    const vector1 = new Vector3(2, 3, 4);
    const vector2 = new Vector3(1, 2, 3);
    const result = vector1.distance(vector2);
    expect(result).to.be.closeTo(1.732, 0.001);
  });


  it('should limit vector magnitude correctly', () => {
    const vector = new Vector3(3, 4, 5);
    const limited = vector.limit(4);
    expect(limited.magnitude()).to.be.lessThanOrEqual(4);
  });
});
