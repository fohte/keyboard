export class Line2 {}

export class Line3 {}

export class Matrix4 {}

export class OrthoNormalBasis {}

export class Path2 {}

export class Plane {}

export class Polygon2 {}

export class Polygon3 {}

export class Side {
  constructor(vertex0: Vertex2, vertex1: Vertex2)
  vertex0: Vertex2
  vertex1: Vertex2

  static fromObject(obj: Object): Side
  private static _fromFakePolygon(polygon: any): Side

  toString(): string
  toPolygon3D(z0, z1)
}

type Vector2DTuple = [number, number]
interface Vector2DObject {
  x: number
  y: number
}

export class Vector2D {
  constructor(x: number, y: number)
  constructor(x: Vector2DTuple)
  constructor(x: Vector2DObject)

  static fromAngle(radians: number): Vector2D
  static fromAngleDegrees(degrees: number): Vector2D
  static fromAngleRadians(radians: number): Vector2D
  static Create(x: number, y: number): Vector2D

  readonly x: number
  readonly y: number
  private _x: number
  private _x: number

  toVector3D(z: number): Vector3D
  equals(a: Vector2D): boolean
  clone(): Vector2D
  negated(): Vector2D
  plus(a: Vector2D): Vector2D
  minus(a: Vector2D): Vector2D
  times(a: number): Vector2D
  dividedBy(a: number): Vector2D
  dot(): number
  lerp(a: Vector2D, t: Vector2D): Vector2D
  length(): number
  distanceTo(a: Vector2D): number
  distanceToSquared(a: Vector2D): number
  lengthSquared(): number
  unit(): Vector2D
  cross(): number
  normal(): Vector2D
  multiply4x4(matrix4x4: any): any
  transform(matrix4x4: any): any
  angle(): number
  angleDegrees(): number
  angleRadians(): number
  min(): Vector2D
  max(): Vector2D
  abs(): Vector2D
  toString(): string
}

export class Vector3D {}

export class Vertex2 {
  constructor(pos: Vector2D)

  pos: Vector2D

  static fromObject(obj: Object): Vertex2
}

export class Vertex3 {}

export class CSG {}

export class CAG {
  constructor()

  fromSides(sides: Side[]): CAG
}
