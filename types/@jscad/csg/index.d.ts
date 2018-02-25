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

export class Vector3D {}

export class Vertex2 {
  constructor(pos: Vector2D)

  pos: Vector2D

  static fromObject(obj: Object): Vertex2
}

declare class Transformer {
  mirrored(plane: any): Transformer
  mirroredX(): Transformer
  mirroredY(): Transformer
  mirroredZ(): Transformer
  translate(v: any): Transformer
  scale(f: any): Transformer
  rotateX(deg: any): Transformer
  rotateY(deg: any): Transformer
  rotateZ(deg: any): Transformer
  rotate(rotationCenter: any, rotationAxis: any, degrees: any): Transformer
  rotateEulerAngles(
    alpha: any,
    beta: any,
    gamma: any,
    position: any
  ): Transformer
}

interface ICentering {
  center(cAxes: string[]): Transformer
}

export class CSG extends Transformer implements ICentering {}

export namespace CSG {
  export const _CSGDEBUG: boolean
  export const defaultResolution2D: number
  export const defaultResolution3D: number
  export const EPS: number
  export const angleEPS: number
  export const areaEPS: number
  export const all: number
  export const top: number
  export const bottom: number
  export const left: number
  export const right: number
  export const front: number
  export const back: number
  export const staticTag: number
  export function getTag(): number

  export function sphere(options?: any): CSG
  export function sphere(options?: any): CSG
  export function cube(options?: any): CSG
  export function roundedCube(options?: any): CSG
  export function cylinder(options?: any): CSG
  export function roundedCylinder(options?: any): CSG
  export function cylinderElliptic(options?: any): CSG
  export function polyhedron(options?: any): CSG

  export function fromCompactBinary(bin: any): CSG
  export function fromObject(obj: object): CSG
  export function fromSlices(options?: any): CSG
  export function fromPolygons(polygons: Polygon[]): CSG

  export function parseOptionAs2DVector(
    options: object,
    optionname: string,
    defaultvalue: Vector2Dable
  ): Vector2D
  export function parseOptionAs3DVector(
    options: object,
    optionname: string,
    defaultvalue: Vector3Dable
  ): Vector3D
  export function parseOptionAs3DVectorList(
    options: object,
    optionname: string,
    defaultvalue: Vector3Dable[]
  ): Vector3D
  export function parseOptionAsBool(
    options: object,
    optionname: string,
    defaultvalue: any
  ): boolean
  export function parseOptionAsFloat(
    options: object,
    optionname: string,
    defaultvalue: number
  ): number
  export function parseOptionAsInt(
    options: object,
    optionname: string,
    defaultvalue: number
  ): number

  type Vector2Dable = Vector2D | [number, number]
  export class Vector2D extends Transformer {
    constructor(x: number, y: number)
    constructor(x: Vector2Dable)

    static fromAngle(radians: number): Vector2D
    static fromAngleDegrees(degrees: number): Vector2D
    static fromAngleRadians(radians: number): Vector2D
    static Create(x: number, y: number): Vector2D

    readonly x: number
    readonly y: number
    private _x: number
    private _y: number

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

  type Vector3Dable = Vector3D | [number, number, number]
  export class Vector3D extends Transformer {}

  export class Vertex extends Transformer {}

  export class Plane extends Transformer {}

  export class Polygon extends Transformer {}

  export class Line2D extends Transformer {}

  export class Line3D extends Transformer {}

  export class Path2D extends Transformer {}

  export class OrthoNormalBasis extends Transformer {}

  export class Matrix4x4 {}

  export class Connector extends Transformer {}

  export class ConnectorList {}

  export class Properties {}

  export class Polygon2D extends CAG {}
}

export namespace CAG {
  export class Side extends Transformer {}

  export class Vertex extends Transformer {}
}

export class CAG extends Transformer implements ICentering {
  constructor()

  fromSides(sides: Side[]): CAG
}
