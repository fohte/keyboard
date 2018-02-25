import { BlobableContents } from '@jscad/io-utils'

export const mimeType: string

interface ISerializeOptions {
  binary: boolean
}

export function serialize(
  data: string,
  options?: ISerializeOptions
): BlobableContents
