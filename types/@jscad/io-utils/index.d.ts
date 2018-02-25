export type BlobableContent = string | ArrayBuffer
export type BlobableContents = BlobableContent[]

interface IBlobOptions {
  type: string
  endings: string
}

export function makeBlob(
  contents: BlobableContents,
  options?: IBlobOptions
): Blob

export class Blob {
  constructor(contents: BlobableContents, options?: IBlobOptions)
  size: number
  type: string
  isClosed: boolean
  encoding: string
  buffer: Buffer
  length: number

  asBuffer(): Buffer
  slice(start?: number, end?: number, type?: string): Blob
  close(): void
  toString(): string
}
