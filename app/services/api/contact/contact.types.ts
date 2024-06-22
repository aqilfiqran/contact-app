import { BaseResponse, BaseServiceOptions, OptionRecord } from "../api.types"
import { IContact } from "./contact.interface"

export type OptionsContactCreate = Pick<
  BaseServiceOptions<
    OptionRecord,
    OptionRecord,
    {
      firstName: string
      lastName: string
      age: number
      photo: string
    }
  >,
  "body"
>

export type ResponseContactCreate = null

export type ResponseContactList = BaseResponse<IContact[]>

export type OptionsContactDetail = Pick<
  BaseServiceOptions<{ id: string }, OptionRecord, OptionRecord>,
  "params"
>

export type ResponseContactDetail = BaseResponse<IContact>

export type OptionsContactUpdate = Pick<
  BaseServiceOptions<
    { id: string },
    OptionRecord,
    {
      firstName: string
      lastName: string
      age: number
      photo: string
    }
  >,
  "params" | "body"
>

export type ResponseContactUpdate = null

export type OptionsContactDelete = Pick<
  BaseServiceOptions<{ id: string }, OptionRecord, OptionRecord>,
  "params"
>

export type ResponseContactDelete = null
